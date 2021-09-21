export default function () {
    const container = document.getElementById('demo-container');
    if (!container) return;

    const home = document.createElement('div');

    let innerHTML = ``;

    innerHTML += `
        <table class="home-table">
            <tr class="h2-des"><th>Element</th><th>Status</th></tr>
            <tr><th class="body-md--semiBold section-divide" colspan="2">Styleguide</th></tr>
            <tr><td>Color               </td><td class="text--bold">Finish</td></tr>
            <tr><td>Effect              </td><td class="text--bold">Finish</td></tr>
            <tr><td>Grid                </td><td>Partial Finish*</td></tr>
            <tr><td>Typo (Font Class)   </td><td class="text--bold">Finish</td></tr>
            <tr><th class="body-md--semiBold section-divide" colspan="2">Utility 
                <br>
               <span class="body-sm--regular">Possible status: Not begin, On Progress, Partial Finish, Finish, Configured differently, Skip</span>    
            </th></tr>
            <tr><td>Display         </td><td>Not begin</td></tr>
            <tr><td>Flex            </td><td>Not begin</td></tr>
            <tr><td>Float           </td><td>Not begin</td></tr>
            <tr><td>Interaction     </td><td>Not begin</td></tr>
            <tr><td>Opacity         </td><td>Not begin</td></tr>
            <tr><td>Overflow        </td><td>Not begin</td></tr>
            <tr><td>Shadow          </td><td>Configured differently</td></tr>
            <tr><td>Sizing          </td><td>Partial Finish*</td></tr>
            <tr><td>Spacing         </td><td>Not begin</td></tr>
            <tr><th class="sub-section-divide" colspan="2">Text</th></tr>
            <tr><td>Text alignment  </td><td>Not begin</td></tr>
            <tr><td>Text wrapping   </td><td>Not begin</td></tr>
            <tr><td>Word break      </td><td>Not begin</td></tr>
            <tr><td>Font size, line height, font weight, font italic </td><td>Configured differently</td></tr>
            <tr><td>Text transform  </td><td>Not begin</td></tr>
            <tr><th class="sub-section-divide" colspan="2">...</th></tr>
            <tr><td>Vertical align  </td><td class="text--bold">Finish</td></tr>
            <tr><td>Visibility      </td><td>Not begin</td></tr>

            <tr><th class="body-md--semiBold section-divide" colspan="2">Component
               <br>
               <span class="body-sm--regular">Possible status: Not begin, On Progress, Partial Finish, Finish, Configured differently, Skip</span> 
            </th></tr>
            <tr><td>Accordion       </td><td>Not begin</td></tr>
            <tr><td>Button          </td><td>Not begin</td></tr>
            <tr><td>Card            </td><td>Not begin</td></tr>
            <tr><td>Comment         </td><td>Not begin</td></tr>
            <tr><td>Divider         </td><td class="text--bold">Finish</td></tr>
            <tr><td>Editorial       </td><td>Not begin</td></tr>
            <tr><td>Footer          </td><td>Not begin</td></tr>
            <tr><td>Form            </td><td>Not begin</td></tr>
            <tr><td>Header          </td><td>Not begin</td></tr>
            <tr><td>Hero            </td><td>Not begin</td></tr>
            <tr><td>Icon            </td><td>Configured differently</td></tr>
            <tr><td>Image           </td><td>Not begin</td></tr>
            <tr><td>Link list       </td><td>Not begin</td></tr>
            <tr><td>Loader          </td><td class="text--bold">Finish</td></tr>
            <tr><td>Logo            </td><td>Not begin</td></tr>
            <tr><td>Map             </td><td>Not begin</td></tr>
            <tr><td>Notification    </td><td>Not begin</td></tr>
            <tr><td>Overlay         </td><td>Not begin</td></tr>
            <tr><td>Pagination      </td><td>On Progress</td></tr>
            <tr><td>Profile         </td><td>Not begin</td></tr>
            <tr><td>Promotion       </td><td>Not begin</td></tr>
            <tr><td>Scrollbar       </td><td>Not begin</td></tr>
            <tr><td>Search          </td><td>Not begin</td></tr>
            <tr><td>Sidebar         </td><td>Not begin</td></tr>
            <tr><td>Success         </td><td>Not begin</td></tr>
            <tr><td>Tab             </td><td>Not begin</td></tr>
            <tr><td>Table           </td><td>Not begin</td></tr>
            <tr><td>Test            </td><td>Not begin</td></tr>
            <tr><td>Text block      </td><td>Not begin</td></tr>
            <tr><td>Toast           </td><td>Not begin</td></tr>
        </table>
        <h2 style="text-decoration: underline"> Note on the road </h2>
        <h4>Grid</h4>
        <div class="body-sm--regular">Not testing thoroughly</div>
        
        <h4>Sizing</h4>
        <div class="body-sm--regular">Not configuring yet: Height, relative to viewport</div>
        
        <div style="margin-bottom: 40px"></div>
   `;

    innerHTML += `</div>`;

    home.innerHTML = innerHTML;

    // Render
    container.innerHTML = '<h1 style="padding-bottom: 20px">Home</h1>';
    container.appendChild(home);
}
