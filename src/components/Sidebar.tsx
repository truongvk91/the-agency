"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GripVertical } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Division } from "@/lib/agents";

const STORAGE_KEY = "the-agency-division-order";

interface SidebarProps {
  divisions: Division[];
  totalAgents: number;
}

interface SortableDivisionItemProps {
  division: Division;
  isActive: boolean;
}

function SortableDivisionItem({ division, isActive }: SortableDivisionItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: division.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : undefined,
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`nav-item-wrapper ${isDragging ? "dragging" : ""}`}
    >
      <button
        className="drag-handle"
        {...attributes}
        {...listeners}
        aria-label="Kéo để sắp xếp"
      >
        <GripVertical size={14} />
      </button>
      <Link
        href={`/${division.id}`}
        className={`nav-item ${isActive ? "active" : ""}`}
      >
        <span className="nav-icon">{division.icon}</span>
        <span className="nav-name">{division.label}</span>
        <span className="nav-count">{division.agentCount}</span>
      </Link>
    </div>
  );
}

export default function Sidebar({ divisions, totalAgents }: SidebarProps) {
  const pathname = usePathname();
  const [orderedDivisions, setOrderedDivisions] = useState<Division[]>(divisions);
  const [mounted, setMounted] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Load saved order from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedOrder = localStorage.getItem(STORAGE_KEY);
    if (savedOrder) {
      try {
        const order: string[] = JSON.parse(savedOrder);
        const sorted = [...divisions].sort((a, b) => {
          const ia = order.indexOf(a.id);
          const ib = order.indexOf(b.id);
          if (ia === -1 && ib === -1) return a.label.localeCompare(b.label);
          if (ia === -1) return 1;
          if (ib === -1) return -1;
          return ia - ib;
        });
        setOrderedDivisions(sorted);
      } catch {
        setOrderedDivisions(divisions);
      }
    } else {
      setOrderedDivisions(divisions);
    }
  }, [divisions]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setOrderedDivisions((items) => {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      const newOrder = arrayMove(items, oldIndex, newIndex);

      // Save to localStorage
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(newOrder.map((d) => d.id))
      );

      return newOrder;
    });
  };

  // Prevent hydration mismatch
  const displayDivisions = mounted ? orderedDivisions : divisions;

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <Image
          src="/cm-media-logo.jpg"
          alt="CM Media"
          width={36}
          height={36}
          className="logo-img"
        />
        <h1 className="logo-text">CM MEDIA AGENCY</h1>
      </div>

      {/* Division List */}
      <nav className="sidebar-nav">
        <div className="nav-label">DIVISIONS</div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={displayDivisions.map((d) => d.id)}
            strategy={verticalListSortingStrategy}
          >
            {displayDivisions.map((div) => (
              <SortableDivisionItem
                key={div.id}
                division={div}
                isActive={pathname.startsWith(`/${div.id}`)}
              />
            ))}
          </SortableContext>
        </DndContext>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="agent-total">
          <span className="total-icon">🤖</span>
          <span>{totalAgents} Agents</span>
        </div>
      </div>
    </aside>
  );
}
