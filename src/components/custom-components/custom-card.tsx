import { Button } from "@/components/ui/button.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx"
import {ChangeEvent} from "react";
import {cn} from "@/lib/utils.ts";
import { ExitIcon } from "@radix-ui/react-icons";
import {RefreshCwIcon} from "lucide-react";

// @ts-ignore
export function CustomCard({setLagTime, setDfs, time, open, setOpen, refresh}) {

  const handleAlgoChange = (value: string) => {
    if (value === "BFS"){
      setDfs(false)
    }else{
      setDfs(true)
    }
  }
  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setLagTime(parseFloat(event.target.value))
  }

  return (
    <Card
      className={cn(
            "w-[350px] h-fit absolute lg:static flex flex-col items-center",
            open ? "ml-0" : "-ml-96 lg:ml-0 transition-all")}

    >

      <CardHeader className="w-full">
        <div className="w-full flex justify-end pt-1 h-fit">
          <Button className="p-1 h-fit" variant="outline" onClick={refresh}>
            <RefreshCwIcon className="shrink-0" />
          </Button>
          <Button className="lg:hidden w-fit self-end m-1" variant="outline" onClick={()=>{setOpen(false)}}>
            <ExitIcon className="shrink-0" />
          </Button>
        </div>

        <CardTitle>Visualizer</CardTitle>
        <CardDescription>Tune the options to see some magic.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Search Algorithm</Label>
              <Select onValueChange={handleAlgoChange}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Breadth First Search" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="BFS">Breadth First Search</SelectItem>
                  <SelectItem value="DFS">Depth First Search</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="lag-time">Lag Time (ms)</Label>
              <Input id="lag-time" placeholder="Time in ms" type="number" value={time} onChange={handleTimeChange} />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
