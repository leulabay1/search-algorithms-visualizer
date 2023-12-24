import './App.css';
import './index.css';
import { useState } from 'react';
import { ThemeProvider } from "@/components/custom-components/theme-provider.tsx";
import { Button } from '@/components/ui/button';
import { ModeToggle } from "@/components/custom-components/mode-toggle.tsx";
import useSearch from "@/hooks/useSearch.ts";
import { CustomCard } from "@/components/custom-components/custom-card.tsx";
import { HamburgerMenuIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import {HelpPopover} from "@/components/custom-components/help.tsx";
function App() {

  const {
    particleArray,
    handleClick,
    visited,
    setDfs,
    setTime,
    time,
    refresh
  } = useSearch(12, 16)

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <div className="flex flex-col items-end w-full gap-3 h-full">

          <div className="w-full flex justify-end">
            <div className="-translate-x-1/2 ml-[25%]">
              <h1 className="text-4xl font-bold text-center">Search Algorithm Visualizer</h1>
              <h2 className="text-xl font-medium text-center">A visualizer for search algorithms</h2>
            </div>
            <ModeToggle />
          </div>

          <div className="flex justify-between relative w-full">

            <CustomCard setDfs={setDfs} setLagTime={setTime} time={time} open={menuOpen} setOpen={setMenuOpen} refresh={refresh} />

            <Button className="lg:hidden w-fit" variant="outline" onClick={()=>{setMenuOpen(true)}}>
              <HamburgerMenuIcon className="shrink-0" />
            </Button>

            <div className="App flex flex-col gap-3 justify-center items-center">
              {
                particleArray.map((row)=>{

                  return(
                    <div key={row[0][0]} className="flex flex-row justify-center items-center gap-3 w-full">
                      {
                        row.map((particle)=>{
                          if (visited.has(`${particle[0]}-${particle[1]}`))
                          {
                            return <Button key={`${particle[0]}-${particle[1]}`} data-key = {`${particle[0]}-${particle[1]}`} onClick={handleClick} variant="default"></Button>

                          }else{

                            return <Button key={`${particle[0]}-${particle[1]}`} data-key = {`${particle[0]}-${particle[1]}`} onClick={handleClick} variant="outline" ></Button>

                          }
                        })
                      }
                    </div>
                  )
                })
              }
            </div>

            <HelpPopover />
          </div>

          <div className="flex justify-center gap-3 items-center justify-self-end mb-0">
            <a href={"https://www.github.com/leulabay1"}  >
              <Button className="w-fit h-fit p-1" variant="outline">
                <GitHubLogoIcon className="w-[30px] h-[30px]" />
              </Button>
            </a>
            made by
            <a href={"https://www.github.com/leulabay1"} className="underline">leulabay1</a>
          </div>

        </div>

      </ThemeProvider>
      );
}

export default App
