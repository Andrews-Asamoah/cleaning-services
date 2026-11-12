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
      <FieldLabel
        htmlFor="cv-upload"
        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
      >
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
          className="group cursor-pointer rounded-2xl border-2 border-dashed border-border bg-secondary/30 p-6 text-center backdrop-blur-md transition-all hover:border-brand sm:p-8"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand/15 text-brand shadow-sm transition-transform group-hover:scale-110">
            <UploadCloud className="h-6 w-6" />
          </div>
          <div className="mt-3 text-sm font-bold text-foreground">
            Click to browse or drag & drop your CV here
          </div>
          <FieldDescription className="mt-1 text-xs text-muted-foreground">
            Supports PDF, DOC, or DOCX (Max 10MB)
          </FieldDescription>
        </div>
      ) : (
        <div className="flex items-center justify-between rounded-2xl border border-brand/30 bg-brand-muted p-4 shadow-sm backdrop-blur-md">
          <div className="flex min-w-0 items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-sm">
              <FileText className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="max-w-[220px] truncate text-xs font-bold text-foreground sm:max-w-xs">
                {file.name}
              </p>
              <p className="text-[11px] font-semibold text-brand">
                {(file.size / 1024).toFixed(1)} KB • Ready for manual review
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={removeFile}
            className="cursor-pointer rounded-xl text-muted-foreground hover:text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {error ? (
        <FieldError className="mt-1 text-xs font-medium text-destructive">{error}</FieldError>
      ) : null}
    </Field>
  );
}
