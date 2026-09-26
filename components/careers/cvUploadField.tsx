"use client";

import { useRef } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field";

const VALID_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_SIZE_BYTES = 10 * 1024 * 1024;

interface CvUploadFieldProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
  error?: string;
}

export function CvUploadField({ file, onFileChange, error }: CvUploadFieldProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = (candidate: File) => {
    const isValidType =
      VALID_TYPES.includes(candidate.type) || /\.(pdf|doc|docx)$/i.test(candidate.name);

    if (!isValidType) {
      onFileChange(null);
      return;
    }
    if (candidate.size > MAX_SIZE_BYTES) {
      onFileChange(null);
      return;
    }
    onFileChange(candidate);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) processFile(e.target.files[0]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) processFile(e.dataTransfer.files[0]);
  };

  const removeFile = () => {
    onFileChange(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <Field data-invalid={!!error} className="space-y-2">
      <FieldLabel htmlFor="cv-upload" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
        Attach Your CV / Resume *
      </FieldLabel>
      <input
        id="cv-upload"
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        className="hidden"
      />

      {!file ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          role="button"
          tabIndex={0}
          className="border-2 border-dashed border-border hover:border-brand rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all bg-secondary/30 backdrop-blur-md group"
        >
          <div className="w-12 h-12 rounded-2xl bg-brand/15 text-brand mx-auto flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm border border-brand/20">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div className="mt-3 text-sm font-bold text-foreground">
            Click to browse or drag & drop your CV here
          </div>
          <FieldDescription className="mt-1 text-xs text-muted-foreground">
            Supports PDF, DOC, or DOCX (Max 10MB)
          </FieldDescription>
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-brand-muted border border-brand/30 flex items-center justify-between backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-brand text-brand-foreground flex items-center justify-center shrink-0 shadow-sm">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-foreground truncate max-w-[220px] sm:max-w-xs">
                {file.name}
              </p>
              <p className="text-[11px] text-brand font-semibold">
                {(file.size / 1024).toFixed(1)} KB • Ready for manual review
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={removeFile}
            className="text-muted-foreground hover:text-destructive rounded-xl cursor-pointer"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      {error ? <FieldError className="text-xs font-medium text-destructive mt-1">{error}</FieldError> : null}
    </Field>
  );
};