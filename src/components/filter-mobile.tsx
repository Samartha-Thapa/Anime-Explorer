import { SlidersHorizontal } from "lucide-react"
import { Button, 
         Select, 
         SelectContent, 
         SelectItem, 
         SelectTrigger, 
         SelectValue,
         Drawer,
         DrawerClose,
         DrawerContent,
         DrawerDescription,
         DrawerFooter,
         DrawerHeader,
         DrawerTitle,
         DrawerTrigger,
         Checkbox,
         Accordion, 
         AccordionContent, 
         AccordionItem, 
         AccordionTrigger
        } from "@/lib/components-index"


export default function FilterMobile() {
    return (
        <div className="md:hidden mb-4">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" /> Filters
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Filters</DrawerTitle>
                    <DrawerDescription>Refine your anime search</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="status">
                        <AccordionTrigger>Status</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {["Airing", "Completed", "Upcoming"].map((status) => (
                              <div key={status} className="flex items-center space-x-2">
                                <Checkbox id={`mobile-status-${status}`} />
                                <label
                                  htmlFor={`mobile-status-${status}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {status}
                                </label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="genres">
                        <AccordionTrigger>Genres</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {[
                              "Action",
                              "Adventure",
                              "Comedy",
                              "Drama",
                              "Fantasy",
                              "Horror",
                              "Mystery",
                              "Romance",
                              "Sci-Fi",
                            ].map((genre) => (
                              <div key={genre} className="flex items-center space-x-2">
                                <Checkbox id={`mobile-genre-${genre}`} />
                                <label
                                  htmlFor={`mobile-genre-${genre}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {genre}
                                </label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="year">
                        <AccordionTrigger>Year</AccordionTrigger>
                        <AccordionContent>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Any year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2025">2025</SelectItem>
                              <SelectItem value="2024">2024</SelectItem>
                              <SelectItem value="2023">2023</SelectItem>
                              <SelectItem value="2022">2022</SelectItem>
                              <SelectItem value="2021">2021</SelectItem>
                              <SelectItem value="older">2020 & Older</SelectItem>
                            </SelectContent>
                          </Select>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="rating">
                        <AccordionTrigger>Rating</AccordionTrigger>
                        <AccordionContent>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Any rating" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="g">G - All Ages</SelectItem>
                              <SelectItem value="pg">PG - Children</SelectItem>
                              <SelectItem value="pg13">PG-13 - Teens 13+</SelectItem>
                              <SelectItem value="r">R - 17+ (violence & profanity)</SelectItem>
                              <SelectItem value="r+">R+ - Mild Nudity</SelectItem>
                            </SelectContent>
                          </Select>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <DrawerFooter>
                    <Button>Apply Filters</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
    )
}