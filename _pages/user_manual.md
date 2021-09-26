<!-- Output copied to clipboard! -->

<!-----
NEW: Check the "Suppress top comment" option to remove this info from the output.

Conversion time: 3.285 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β31
* Sun Sep 26 2021 13:05:33 GMT-0700 (PDT)
* Source doc: open·control User Manual
* Tables are currently converted to HTML tables.
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!


WARNING:
You have 6 H1 headings. You may want to use the "H1 -> H2" option to demote all headings by one level.

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 1; ALERTS: 15.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>
<a href="#gdcalert4">alert4</a>
<a href="#gdcalert5">alert5</a>
<a href="#gdcalert6">alert6</a>
<a href="#gdcalert7">alert7</a>
<a href="#gdcalert8">alert8</a>
<a href="#gdcalert9">alert9</a>
<a href="#gdcalert10">alert10</a>
<a href="#gdcalert11">alert11</a>
<a href="#gdcalert12">alert12</a>
<a href="#gdcalert13">alert13</a>
<a href="#gdcalert14">alert14</a>
<a href="#gdcalert15">alert15</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



# open·control user manual


# Installation:



* Create a folder named Remote Scripts in Live’s User Library
* Copy and paste the open_control folder into it.
* Relaunch Live
* Connect open·control and set the Preferences like this :



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


**<span style="text-decoration:underline;">MIDI Remote mode:</span>**

If you want to connect open·control with standard MIDI cables, connect the In and Out ports of open·control to your MIDI peripheral, and set the Input and Output ports accordingly.

You need to plug open·control to a standard USB charger in order to provide it power.


# Normal Use:

**open·control** is very simple and straightforward to use.

Each element of the controller (LEDs, display, buttons, sliders) can be configured to perform or display any of the selected actions.

To configure the controller, connect it to your computer, and open the editor by opening the page open.control.html on a web Browser.

**NB: The editor is currently only supported by Chrome, Opera and Edge.**

When opening the editor, you will be asked if you authorize access to your MIDI devices, answer “Allow”.

You should see the text ** open·control detected **, meaning that the controller is ready.

All the controls will automatically be populated with the current actions.



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


In this manual, the actions will be shown like this : **<code>This is an Action</code></strong>.

**<span style="text-decoration:underline;">Display:</span>**



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")


This will change what is shown on the LED matrix. 

You can choose among: Scene Name, Track Name, Arrangement Marker Name, Variation Number and Looper Number.

**<span style="text-decoration:underline;">Buttons:</span>**



<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")


You can choose actions for both Short and Long Press (> 0.5s). 

You can now choose which action you want each Button to perform among the drop-down list. 

The actions are effective immediately.

**<span style="text-decoration:underline;">Snap</span>**: 

The **Short Buttons** send their message when **releasing** the switch. This is necessary to achieve both Short and Long presses. However, for some actions, timing is crucial. In this case, you may need to send the value exactly when the Button is pressed. This is what Snap allows: **when it is selected, the Button performs only one action, and sends its message on button press.**

**<span style="text-decoration:underline;">LEDs:</span>**

When selecting a Short Press action that has a LED action associated to it, the LED action will automatically be selected.

For instance, if you choose **<code>Arm Track</code></strong> for Short Button 4, then the corresponding LED will automatically be set to show the Arm status. If you want it to show another parameter, you can still choose something else afterwhile.

For actions that don’t have a color associated to them, you can set your own color by choosing **<code>Custom Color</code></strong>, and then a number in the menu that appears to the right.



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")


**<span style="text-decoration:underline;">Pages:</span>**

**You can set up to 3 different pages of actions**. Simply choose which page you want to edit using the top left chooser.

To use the different pages, you will obviously need to set buttons to switch between them.

This is done with the 2 actions at the end of the list: **<code>⇆ Page 2 </code></strong>and<strong><code> ⇆ Page 3</code></strong>.

When set to **<code>⇆ Page color</code></strong> , the LED will show the following colors:


<table>
  <tr>
   <td>Page 1
   </td>
   <td>🟠
   </td>
  </tr>
  <tr>
   <td>Page 2
   </td>
   <td>🔵
   </td>
  </tr>
  <tr>
   <td>Page 3
   </td>
   <td>🟣
   </td>
  </tr>
</table>


You can find at the end of this document a complete list of actions for Display, Buttons, LEDs and Sliders.

**<span style="text-decoration:underline;">External MIDI:</span>**

You can control open·control with external gear. To do so, simply connect the MIDI Out of your MIDI device to the MIDI In port of open·control.

You then need to tell open·control which MIDI data acts as Button 1, Button 2 etc…

You can configure it with the External MIDI part of the Editor.

For instance, if your MIDI device sends Control Change 18 on Channel 4 and you want to act as Button 3, choose the corresponding values. <span style="text-decoration:underline;">Note: this will only work if the device sends momentary values, ie 127 (or any value greater than 1) when pressed, and 0 when released .</span>

If your MIDI gear sends MIDI messages other than the ones used by open·control, they will be passed through.

This means that you can create a preset to control open·control, and still continue to use your device, open·control will then only act as a MIDI hub.

If your gear has MIDI through capabilities, you can even use open·control in MIDI remote mode.

To do so:

- connect the MIDI Out/Through port of your controller to the MIDI In port of open·control

- connect the MIDI Out port of open·control to the MIDI In port of your computer

- connect the MIDI Out port of your computer to the MIDI In port of your controller


# Looper:

In order to be detected by open·control, the Looper devices must have (LOOPER_n_) in their name, where _n_ is a number.

You can do this with the controller by selecting the Looper in Live and pressing the **<code>+ Add Looper </code></strong> button.

You can then select the Looper devices by pressing the**<code> ⧀ Prev Looper </code></strong>and <strong><code>⧁ Next Looper </code></strong>buttons.

**<span style="text-decoration:underline;">MIDI Mapping:</span>**

To use the Looper, it is necessary to combine the Control Surface and MIDI Mapping. This is because some of the features in Looper are not accessible via standard Control Surface actions.

The first thing to do is make sure that “Input: Remote” is set to On for open·control.

Once this is done, you need to map your buttons to the Loopers

**<code>① MIDI Map 1 (Big Button) </code></strong>to the Big Button

**<code>② MIDI Map 2 (Clear) </code></strong>to the Clear button (if needed)

**<code>③ MIDI Map 3 (Undo) </code></strong>to the Undo button (if needed)

You need to do that individually for each Looper (don’t worry though, this is saved with your Live Set).

These buttons are special, since the MIDI Note and Channel they send are automatically updated when you select a Looper device. This way, the same button lets you control several Looper devices.

This also allows you to have a **<code>Clear All</code></strong> button.

All the **<code>MIDI Map Buttons </code></strong>will send a Note On Message, where the Note number corresponds to the selected Looper number, starting at C0, ie Looper 1 = C0, Looper 2 = C#0, Looper 3 = D0 and so on.

**<code>① MIDI Map 1 (Big Button)</code></strong> will send the Note on MIDI Channel 16.

**<code>② MIDI Map 2 (Clear) </code></strong>will send the Note on Channel 15.

**<code>③ MIDI Map 3 (Undo) </code></strong>will send the Note on Channel 14.

For instance with 4 Loopers mapped, your mapping should look like that: 



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")


 

**⚠︎** To have improved accuracy when using the Looper, It is better to have **Snap** on when using the **<code>① MIDI Map 1 (Big Button) </code></strong>


# Extra Features:

If you add (STOP) to a Scene name, or to an Arrangement Marker name, Live will stop playing when launching the Scene or crossing the Marker.




# List of available actions and controls:

**Display:**


<table>
  <tr>
   <td><strong>Display</strong>
   </td>
  </tr>
  <tr>
   <td>Scene Name
   </td>
  </tr>
  <tr>
   <td>Track Name
   </td>
  </tr>
  <tr>
   <td>Arrangement Marker Name
   </td>
  </tr>
  <tr>
   <td>Variation Name
   </td>
  </tr>
  <tr>
   <td>Looper Number
   </td>
  </tr>
</table>


**Buttons & LEDs:**


<table>
  <tr>
   <td colspan="3" ><strong>--- Global ---</strong>
   </td>
  </tr>
  <tr>
   <td>Button Actions
   </td>
   <td>LED actions
   </td>
   <td>LED color
   </td>
  </tr>
  <tr>
   <td>■/▶ Start/Stop
   </td>
   <td>■/▶ Start/Stop
   </td>
   <td>🟢
   </td>
  </tr>
  <tr>
   <td>●○ Metronome
   </td>
   <td>●○ Metronome
   </td>
   <td>🟡
   </td>
  </tr>
  <tr>
   <td>⤶ Undo
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>▢ Capture
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⊕ BPM +1
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⊖ BPM -1
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⮂ Arrangement/Session Toggle
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Clip/Device Toggle
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="3" ><strong>--- Arrangement ---</strong>
   </td>
  </tr>
  <tr>
   <td>Button Actions
   </td>
   <td>LED actions
   </td>
   <td>LED color
   </td>
  </tr>
  <tr>
   <td>↞ Jump to 1.1.1
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⇉ Restart From Last Position
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>● Arrangement Rec
   </td>
   <td>● Arrangement Rec
   </td>
   <td>🔴
   </td>
  </tr>
  <tr>
   <td>⥁ Arrangement Loop
   </td>
   <td>⥁ Arrangement Loop
   </td>
   <td>🟡
   </td>
  </tr>
  <tr>
   <td>⇤ Go to Prev Marker
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⇥ Go to Next Marker
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⤓ Add/Delete Marker
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⥀ Loop to Next Marker
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Punch In
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Punch Out
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="3" ><strong>--- Session ---</strong>
   </td>
  </tr>
  <tr>
   <td>Button Actions
   </td>
   <td>LED actions
   </td>
   <td>LED color
   </td>
  </tr>
  <tr>
   <td>○ Session Rec
   </td>
   <td>○ Session Rec
   </td>
   <td>🔴
   </td>
  </tr>
  <tr>
   <td>▶ Launch Scene
   </td>
   <td>▶ Launch Scene
   </td>
   <td>

<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image7.png" width="" alt="alt_text" title="image_tooltip">

   </td>
  </tr>
  <tr>
   <td>⬆ Sel Prev Scene
   </td>
   <td>⬆ Sel Prev Scene
   </td>
   <td>

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image8.png" width="" alt="alt_text" title="image_tooltip">

   </td>
  </tr>
  <tr>
   <td>⬇ Sel Next Scene
   </td>
   <td>⬇ Sel Next Scene
   </td>
   <td>

<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image9.png" width="" alt="alt_text" title="image_tooltip">

   </td>
  </tr>
  <tr>
   <td>⥴ Jump to Playing Scene
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⥅ Insert Scene
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⧈ Stop All Clips
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>➟ Disable Follow Actions
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="3" ><strong>--- Tracks ---</strong>
   </td>
  </tr>
  <tr>
   <td>Button Actions
   </td>
   <td>LED actions
   </td>
   <td>LED color
   </td>
  </tr>
  <tr>
   <td>← Sel Prev Track
   </td>
   <td>← Sel Prev Track Color
   </td>
   <td>

<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image10.png" width="" alt="alt_text" title="image_tooltip">

   </td>
  </tr>
  <tr>
   <td>→ Sel Next Track
   </td>
   <td>→ Sel Next Track Color
   </td>
   <td>

<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image11.png" width="" alt="alt_text" title="image_tooltip">

   </td>
  </tr>
  <tr>
   <td>▷ Launch Clip
   </td>
   <td>▷ Launch Clip
   </td>
   <td>

<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image12.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image12.png" width="" alt="alt_text" title="image_tooltip">

   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>✽ Selected Track Color
   </td>
   <td>

<p id="gdcalert13" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image13.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert14">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image13.png" width="" alt="alt_text" title="image_tooltip">

   </td>
  </tr>
  <tr>
   <td>↳ Find Empty Slot
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⌧ Mute
   </td>
   <td>⌧ Mute
   </td>
   <td>🟡
   </td>
  </tr>
  <tr>
   <td>S Solo
   </td>
   <td>S Solo
   </td>
   <td>🔵
   </td>
  </tr>
  <tr>
   <td>⌻ Arm
   </td>
   <td>⌻ Arm
   </td>
   <td>🔴
   </td>
  </tr>
  <tr>
   <td>■ Stop
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>U Fold/Unfold Track
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>☆ Add Audio Track
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>✬ Add MIDI Track
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="3" ><strong>--- Looper ---</strong>
   </td>
  </tr>
  <tr>
   <td>Button Actions
   </td>
   <td>LED actions
   </td>
   <td>LED color
   </td>
  </tr>
  <tr>
   <td>⧀ Prev Looper
   </td>
   <td>⧀ Prev Looper Track Color
   </td>
   <td>

<p id="gdcalert14" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image14.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert15">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image14.png" width="" alt="alt_text" title="image_tooltip">

   </td>
  </tr>
  <tr>
   <td>⧁ Next Looper
   </td>
   <td>⧁ Next Looper Track Color
   </td>
   <td>

<p id="gdcalert15" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image15.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert16">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image15.png" width="" alt="alt_text" title="image_tooltip">

   </td>
  </tr>
  <tr>
   <td>① MIDI Map 1 (Big Button)
   </td>
   <td>◈ Looper State
   </td>
   <td>🔴🟢🔵
   </td>
  </tr>
  <tr>
   <td>② MIDI Map 2 (Clear)
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>③ MIDI Map 3 (Undo)
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>▣ Stop Looper
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⌻ Arm Looper Track
   </td>
   <td>⌻ Arm Looper Track
   </td>
   <td>🔴
   </td>
  </tr>
  <tr>
   <td>⌧ Mute Looper Track
   </td>
   <td>⌧ Mute Looper Track
   </td>
   <td>🟡
   </td>
  </tr>
  <tr>
   <td>⌸ Show Looper
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>"+" Add Looper
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>∅ Clear All
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="3" ><strong>--- Variations ---</strong>
   </td>
  </tr>
  <tr>
   <td>Button Actions
   </td>
   <td>LED actions
   </td>
   <td>LED color
   </td>
  </tr>
  <tr>
   <td>⍇ Prev Device
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⍈ Next Device
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⌃ Prev Variation
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⌵ Next Variation
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>▹ Launch Variation
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>◦ Store Variation
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>↩︎ Recall Last Used
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>⌁ Randomize Macros
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="3" ><strong>--- Pages ---</strong>
   </td>
  </tr>
  <tr>
   <td>Button Actions
   </td>
   <td>LED actions
   </td>
   <td>LED color
   </td>
  </tr>
  <tr>
   <td>⇆ Page 2
   </td>
   <td>⇆ Page Color
   </td>
   <td>🟠🔵
   </td>
  </tr>
  <tr>
   <td>⇆ Page 3
   </td>
   <td>⇆ Page Color
   </td>
   <td>🟠🟣
   </td>
  </tr>
</table>


**Sliders:**


<table>
  <tr>
   <td><strong>--- Global ---</strong>
   </td>
  </tr>
  <tr>
   <td>Last Selected Parameter
   </td>
  </tr>
  <tr>
   <td>Global Groove Amount
   </td>
  </tr>
  <tr>
   <td>Scroll Scenes
   </td>
  </tr>
  <tr>
   <td><strong>--- Selected Track ---</strong>
   </td>
  </tr>
  <tr>
   <td>Send A
   </td>
  </tr>
  <tr>
   <td>Send B
   </td>
  </tr>
  <tr>
   <td>Selected Device Param 1
   </td>
  </tr>
  <tr>
   <td>Selected Device Param 2
   </td>
  </tr>
  <tr>
   <td>Device 1 Param 1
   </td>
  </tr>
  <tr>
   <td>Device 1 Param 2
   </td>
  </tr>
  <tr>
   <td><strong>--- Looper Track ---</strong>
   </td>
  </tr>
  <tr>
   <td>Looper Device 1 Param 1
   </td>
  </tr>
  <tr>
   <td>Looper Device 1 Param 2
   </td>
  </tr>
</table>
