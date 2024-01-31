'use client'
import { AppIcons } from "@/elements";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const BackButton = ({ label }: { label: string }) => {
  const router = useRouter();
  const handleBack = useCallback(() => router.back(), [router]);
  return (
    <button
      type="button"
      onClick={handleBack}
      className="flex items-center gap-2 bg-transparent border-0 no-focus"
    >
      {AppIcons.ic_back}
      <span className="text-xsm text-grey-900">{label}</span>
    </button>
  );
};

export default BackButton;
