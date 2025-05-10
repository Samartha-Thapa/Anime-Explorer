import { Filter } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/lib/components-index"

export default function FilterDesktop() {
    return (
        <div className="hidden md:block w-64 space-y-6">
                    <div className="rounded-lg border bg-card p-4">
                      <h2 className="font-semibold mb-4 flex items-center gap-2">
                        <Filter className="h-4 w-4" /> Filters
                      </h2>
        
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Status</h3>
                          <div className="space-y-2">
                            {["Airing", "Completed", "Upcoming"].map((status) => (
                              <div key={status} className="flex items-center space-x-2">
                                <Checkbox id={`status-${status}`} />
                                <label
                                  htmlFor={`status-${status}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {status}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
        
                        <div>
                          <h3 className="text-sm font-medium mb-2">Genres</h3>
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
                                <Checkbox id={`genre-${genre}`} />
                                <label
                                  htmlFor={`genre-${genre}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {genre}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
        
                        <div>
                          <h3 className="text-sm font-medium mb-2">Year</h3>
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
                        </div>
        
                        <div>
                          <h3 className="text-sm font-medium mb-2">Rating</h3>
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
                        </div>
        
                        <Button className="w-full">Apply Filters</Button>
                      </div>
                    </div>
                  </div>
    )
}