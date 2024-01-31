import { AppIcons } from "@/elements";
import React from "react";

export default function SectionHeader({ title, description }: { title: string; description: string; }) {
  return (
    <div className="space-y-5">
      <div className="inline-flex items-center gap-4">
        {AppIcons.ic_rectangle}
        <p className="text-primary-500 font-semibold">{title}</p>
      </div>
      <h2 className="text-4xl font-semibold font-inter">
        {description}
      </h2>
    </div>
  );
}
