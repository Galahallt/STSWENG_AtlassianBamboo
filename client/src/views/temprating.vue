 <writeModal :writeReview="showWriteModal" @close="toggleWriteModal">
                      
                          <div class="grid grid-rows-3">
                            <div class="row-span-2 mt-4">
                              <div class="flex justify-center">
                                <!-- <vue3-star-ratings :disableClick="true" v-model="state.rating" /> -->
                                <star-rating :star-size="50" :rounded-corners="true" :border-width="4" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
                        
                              </div>
                              <div class="flex justify-center">
                                <div>Numeric value:</div>
                                <div class="ml-2">{{ state.rating }}</div>
                              </div>
                            </div>
                            <p
                              class="ml-10 text-red-500 manrope-bold text-left text-sm"
                              v-if="state.error"
                            >
                              Error occured.
                            </p>
                            <div class="row-span-1 justify-self-center">
                              <div class="">
                                <button
                                  class="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900 shadow-lg flex-shrink content-center"
                                  @click="checkRating"
                                >
                                  Submit Rating
                                </button>
                              </div>
                            </div>
                          </div>
                    </writeModal>