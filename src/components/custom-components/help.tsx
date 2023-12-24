import { Button } from "@/components/ui/button"
import { QuestionMarkIcon } from "@radix-ui/react-icons"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function HelpPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-fit p-2">
          <QuestionMarkIcon className="w-[20px] h-[20px]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Don't know how to start the visualizer?</h4>
            <p className="text-sm text-muted-foreground">
              click on any cell on the grid and the visualizer will start from there
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Want to change the search algorithm?</h4>
            <p className="text-sm text-muted-foreground">
              you see the options on the left side? click on it and select the algorithm you want to use.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
