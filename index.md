---
layout: splash
classes: wide
permalink: /

header:
  video:
    id: IZiSfuIQdWI
    provider: youtube

feature_row:
- image_path: /assets/images/red_pocket.jpg
  title: "Pocket"
  image_url: "./versions/"
  excerpt: "<p align=center><b>Desktop version</b></p>
  <p align=center>· LED Matrix Display<br> 
    · 6 Buttons with visual feedback<br> 
    · 2 Endless Knobs with Push Button<br>
    · MIDI In/Out<br>
    · USB<br>
    · Optional 3D-printed Cover<br></p>"
  url: "/purchase/"
  btn_label: "Out of Stock"
  btn_class: "btn--inverse"

- image_path: /assets/images/red_boxed.jpg
  title: "Boxed"
  image_url: "./versions/#boxed"
  excerpt: "<p align=center><b>Use pedals instead of buttons</b></p>
  <p align=center>· LED Matrix Display<br>
    · 6 Jack inputs for Switch Pedals w/ visual feedback<br>
    · 2 Jack Inputs for Expression Pedals<br>
    · 2 Endless Knobs with Push Button<br> 
    · MIDI In/Out<br>
    · USB<br>
    · Robust plastic enclosure</p>
    "
  url: "/purchase/"
  btn_label: "129€"
  btn_class: "btn--inverse"

- image_path: /assets/images/red_maker2.jpg
  title: "Maker"
  image_url: "./versions/#maker"
  excerpt: "<p align=center><b>Create your own enclosure</b></p>
  <p align=center>· PCB Board + Components<br>
    · 6  Slots to solder Switches w/ visual feedback<br>
    · 2 Slots to solder Endless Encoders with Push Button<br>
    · 2 Slots to solder variable Resistors<br>
    · MIDI In/Out<br>
    · USB<br></p>"
  url: "/purchase/"
  btn_label: "59€"
  btn_class: "btn--inverse"

feature_row2:
- image_path: /assets/images/standard_midi.png
  title: "Standard USB"
  excerpt: "<p align=center>Simply connect open·control to your computer using a standard USB cable.<br> <br> <br> <br> <br></p>"
- image_path: /assets/images/remote_midi.png
  title: "Remote Control"
  excerpt: "<p align=center>For longer distance, you can use the MIDI In and Out ports.<br>The power will be supllied by the USB port.<br> <br> <br> <br></p>"
- image_path: /assets/images/external_midi.png
  title: "External MIDI"
  excerpt: "<p align=center><b>Use your own equipment to control open·control.</b> <br>
  Just plug your gear to the MIDI In port, set the controls on the editor and your gear will trigger the corresponding buttons. <br>
  Any MIDI hardware that sends Notes or Control Changes can be used (for instance FCB1010, SPD-SX...).</p>"



gallery_looper:
- image_path: /assets/images/looper.jpeg
- image_path: /assets/images/opencontrol_box_small.jpg
---
<!-- # <span class="bis"> Videos</span> -->

<!-- # open·control, a unique Control Surface for Ableton Live -->

<html>
    <div >
    <p align=center>
      <h3>open·control is a customizable MIDI controller with a <b>large and bright display, 6 buttons with visual feedback</b> and <b>2 knobs.</b><br>
        It is available in 3 formats, to use it with <b>pedals, fingers, or to make your own</b>.</h3>
      </p>
      <br>
        <!-- <div >
            <img src="./assets/images/pocket_angle.jpg" class="my_header"/>
        </div>
        <br> 
        <p align=center>
        Is is Open Source, so all the code is available, and it will continuously improve as its user base grows.</p>
    <br>-->
    
<h1>
1 controller, 3 flavors
</h1>
<p align=center>
  <h3>open·control is available in 3 formats.</h3> <br>

<p align=center>
  <b>Pocket</b> is a lightweight desktop controler, <b>Boxed</b> is designed to be used with pedals, and <b>Maker</b> is for the hobbyist who wants to create his own enclosure.
</p>

<br>
{% include feature_row %}



<br>
<h1>
  Control the controls
</h1>

<p align=center>
    Each element of the controller can be changed instantly with an easy to use Web Editor (also available offline).<br>
    You can create up to 3 different pages of controls.<br>
    No need to reload Live or refresh anything, all changes are applied immediately.
</p>

<p align=center>
<a href="https://kblivesolutions.github.io/open.control-editor/" target="_blank">
<img src="./assets/images/editor_small.png"  width=800px/></a>
<br>
<p align=center>
  <b>open·control is the only controller available that shows and controls Variations, Scene names, Looper state... amongst many other unique features.</b> <br>
  Of course you can  use the buttons to do "classic" MIDI mapping.<br>
  You can find a <a href="./ressources#available-actions">list of available actions</a> and some <a href="./ressources#examples">examples</a> on the Ressources page.

<p align=center>
  open·control being Open Source, you can adapt the code to your own needs.</p>

<br>
<h1>
  Setlists
  </h1>
  <h3>Optimize your live performance with Setlists</h3>
      <p align=center>You can create setlists by adding (SONG#) to a <b>Scene</b> or <b>Arrangement Marker</b> name<br>
      You will then be able to go to the next or previous song, and launch the selected song instantly. <br>
      <br>
<img src="./assets/images/setlist_reduced1.gif"  width=650px/>
<br>
<br>
  Your setlist can be as long as you want. <br>
  You can easily re-organize your Setlist by updating the (SONG#) tags.<br>
  <a href="./ressources#setlists">More details</a>
  <br>
  <h1>
Looper integration
</h1>
<h3>open·control takes extra care of Live's Looper device</h3>
  <p align=center><b>open·control detects any Looper that has (LOOPER#) in its name.</b> You can then navigate through Loopers and control and monitor the state of each Looper individually.<br>
  Another useful feature is that you can monitor the state of 6 Loopers simultaneously.<br>
  <a href="./ressources#looper">More details</a></p>
<br>

<div >
  <img src="./assets/images/looper_suroptimized.gif" class="my_header_2"/>

</div>
<br>
<h1>
  Custom Actions
  </h1>
  <h3>When 1 action is not enough</h3>
      <p align=center>If you need to perform more than 1 action when pressing a button, you can create list of actions with "Custom Actions". These actions are created in a special text file, or by renaming Clips inside Live.<br>
      The syntax is similar to ClyphX, so you can instantly turn existing ClyphX actions into buttons press. This also means that more actions are available.
      <br>
<br>
<img src="./assets/images/custom_action2.gif" width=650px/>
<br>
  <br>


<h1>
  3 MIDI modes</h1>
<p align=center>open·control has  MIDI In and Out ports (stereo 3.5mm minijack), making it possible to connect it in 3 different ways. <br>
  This is available on all the versions (Pocket, Boxed or Maker).
</p>
<br>

{% include feature_row id="feature_row2" %}
  <br>
  
  <h1>
  Specifications</h1>
<div class="specs">
<b>Display:</b>
<li>32x6 pixels White LED Matrix</li>
<li>6 RGB LEDs with adjustable brightness</li>
<br>
<b>Connectors:</b>
<li>USB Type B</li>
<li>Stereo 3.5mm minijack MIDI In & Out</li>
<li><b>Boxed: </b>8 x 6.35mm Jack Inputs (6 Mono for Pedal Switches, 2 Stereo for Expression Pedals)</li>
<li><b>Pocket: </b>6 Buttons and 2 Knobs</li>
<br>

<b>Dimensions:</b>
<li>Pocket: 15 x 9 X 4 cm</li>
<li>Boxed : 16 x 9.5 X 3.5 cm</li>
<br>
</div>
<p align=center><img src="./assets/images/green_recycle.jpeg" width=45px> <b><font color="rgb(128, 128, 0)">To help make the planet a bit greener , <u>no cables are provided with open.control.</u></font> </b><br> 
  The USB cable is very standard (Printer type), you probably have one you don't use.</p>
<br><h1>
    FAQ
</h1>
<div class="specs">
<li>Q: Does opencontrol rely on Max For Live ?<br>
  No, there's no need to have Max For Live</li>
  <li>Q: Why is the display a LED matrix, and not an OLED display ?<br>
    The main idea behind open·control was to use it on stage and to be able to read it from a certain distance and from any angle. Therefore the best solution was a LED matrix.</li>
  <li>Q: What version of Live are supported ?<br>
  Any version above Live 9 will work (Lite, Standard, Suite). </li>
  </div>
