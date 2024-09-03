import { Button } from "@material-tailwind/react";

export function BlockLevelButton({ disabled, loading, type }) {
  return (
    <Button
      type={type}
      className="mx-4 w-[80%]"
      disabled={disabled}
      loading={loading}
    >
      {loading ? "Submitting" : "Submit"}
    </Button>
  );
}
