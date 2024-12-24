import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";

interface InputWithIconProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon: LucideIcon;
  required?: boolean;
}

export function InputWithIcon({ id, label, type = "text", placeholder, icon: Icon, required }: InputWithIconProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-white">{label}</Label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 h-5 w-5 text-zinc-300" />
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500 transition-all"
        />
      </div>
    </div>
  );
}