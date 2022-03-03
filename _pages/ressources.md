---
layout: single
permalink: /ressources/
sidebar:
  nav: "sidebar"

toc: true
toc_label: "Page Contents"
toc_sticky: true
# toc_icon: "cog"

gallery_pocket:
- url: /assets/images/hello_angle.jpeg
  image_path: /assets/images/hello_angle.jpeg
- url: /assets/images/pocket_front.jpeg
  image_path: /assets/images/pocket_front.jpeg
- url: /assets/images/pocket_back.jpg
  image_path: /assets/images/pocket_back.jpg
  
gallery_boxed:
- url: /assets/images/red_boxed.jpg
  image_path: /assets/images/red_boxed.jpg
- url: /assets/images/boxed_front.jpg
  image_path: /assets/images/boxed_front.jpg
- url: /assets/images/boxed_back.jpg
  image_path: /assets/images/boxed_back.jpg
- url: /assets/images/boxed_full_hiQ.jpg
  image_path: /assets/images/boxed_full_hiQ.jpg

gallery_maker:
- url: /assets/images/maker_components.jpg
  image_path: /assets/images/maker_components.jpg
- url: /assets/images/red_maker2.jpg
  image_path: /assets/images/red_maker2.jpg
- url: /assets/images/split.jpg
  image_path: /assets/images/split.jpg

gallery_cover:
- url: /assets/images/Cover_PET.jpg
  image_path: /assets/images/Cover_PET.jpg
- url: /assets/images/cover_small.jpg
  image_path: /assets/images/cover_small.jpg
- url: /assets/images/cover_small_2.jpg
  image_path: /assets/images/cover_small_2.jpg


gallery_examples:
- url: /assets/images/scene_example.jpg
  image_path: /assets/images/scene_example.jpg
  title: "Scenes"
- url: /assets/images/track_example.jpg
  image_path: /assets/images/track_example.jpg
  title: "Tracks"
- url: /assets/images/arr_example.jpg
  image_path: /assets/images/arr_example.jpg
  title: "Arrangement"

---
<a></a>

# Videos
## open·control demo

<span class="auto-resizable-iframe">
<div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/XDOy5wNA_7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Setting up open·control for Live's Looper {#looper}

<span class="auto-resizable-iframe">
  <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2paxKd9Q0rU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

## Creating Setlists {#setlists}

<span class="auto-resizable-iframe">
  <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/usn9HxS2Gtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>


<br>


# Pictures & Specs

## Pocket

{% include gallery id="gallery_pocket" %}
<b>Dimensions:</b> 15 x 9 X 4 cm

### 3D Printed Cover

<p align=center>A 3D printed cover for the Pocket version is available.<br>
This cover is made of <b>recycled bottles</b>.<br>
Produced and designed by Bruno Tognin. </p>

<br>
{% include gallery id="gallery_cover" %}
<p align=center>You can also print it yourself, you can find the files in the <a href="../ressources">Ressources</a> page.</p>

##  Boxed

{% include gallery id="gallery_boxed" %}

## Maker

{% include gallery id="gallery_maker" %}

## Specifications

- Bright LED Matrix display
- 6 Buttons
- 6 RGB LEDs for visual feedback
- 2 Endless Knobs with Push Buttons
- MIDI In and Out 3.5mm TRS jack
- USB

**Pocket :**
- Optional 3D printed cover
- Dimensions: 15 x 9 X 4 cm

**Boxed :**
- Buttons are replaced with 6.35mm mono jacks
- 2 Expression Pedal inputs
- Robust plastic enclosure
- Dimensions : 16 x 9.5 X 3.5 cm

**Maker :**
- Soldering slots to connect switches, potentiometers etc
- Components provided [(see below)](#makers)
- Dimensions: 15 x 9 X 2 cm


# List of available Actions {#available-actions}
## Global Actions

| Actions                           | Buttons | LEDs | Sliders | Encoders |
|-----------------------------------|---------|------|---------|----------|
| ■/▶ Start/Stop                    | *       | *    |         |          |
| ●○ Metronome                      | *       | *    |         |          |
| ❚❚ Pause                          | *       |      |         |          |
| ⧈ Stop All Clips                  | *       |      |         |          |
| ⤶ Undo                            | *       | *    |         |          |
| ▢ Capture                         | *       | *    |         |          |
| ⊕ BPM +1                          | *       |      |         |          |
| ⊖ BPM -1                          | *       |      |         |          |
| ± BPM +/- 1                         |         |      |         | *        |
| ⤷ Redo                            | *       | *    |         |          |
| ← Re-enable Automation            | *       | *    |         |          |
| ⮂ Arrangement/Session View Toggle | *       |      |         |          |
| ⮂ Clip/Device View Toggle         | *       |      |         |          |
| ℚ MIDI Recording Quantization     | *       | *    |         |          |
| 🎚 Master Volume                     |         |      | *       | *        |
| 🎧 Cue Volume                        |         |      | *       | *        |
| % Global Groove Amount              |         |      | *       | *        |
| ⟳ Last Selected Parameter           |         |      | *       | *        |
| ≪≫ Skip Forward/Backward                      |         |      |         | *        |
| ↔ Horizontal Zoom                   |         |      |         | *        |
| ↔ Horizontal Scroll                 |         |      |         | *        |

## Arrangement Actions 

| Actions                           | Buttons | LEDs | Sliders | Encoders |
|-----------------------------------|---------|------|---------|----------|
| ● Arrangement Rec                 | *       | *    |         |          |
| ⥁ Arrangement Loop                | *       | *    |         |          |
| ⇉ Restart From Last Position      | *       |      |         |          |
| ⇥ Go to Next Marker               | *       |      |         |          |
| ⇤ Go to Prev Marker               | *       |      |         |          |
| ⥀ Loop to Next Marker             | *       |      |         |          |
| ⤓ Add/Delete Marker               | *       |      |         |          |
| ⌉ Punch In                          | *       | *    |         |          |
| ⌈ Punch Out                         | *       | *    |         |          |
| ⇶ Back To Arrangement               | *       | *    |         |          |
| ↞ Jump to 1.1.1                   | *       |      |         |          |
| ⤞ Arrangement Loop Start            |         |      |         | *        |
| ⩉ Arrangement Loop Length           |         |      |         | *        |
| ↹ Jump to Next/Prev Marker          |         |      |         | *        |

## Session Actions

| Actions                           | Buttons | LEDs | Sliders | Encoders |
|-----------------------------------|---------|------|---------|----------|
| ○ Session Rec                     | *       | *    |         |          |
| ▶ Launch Scene                    | *       | *    |         |          |
| ⬆ Sel Prev Scene                  | *       | *    |         |          |
| ⬇ Sel Next Scene                  | *       | *    |         |          |
| ⇈+4 Jump 4 Scenes Up              | *       |      |         |          |
| ⇊-4 Jump 4 Scenes Down            | *       |      |         |          |
| ⥴ Jump to Playing Scene           | *       |      |         |          |
| ⥅ Insert Scene                    | *       |      |         |          |
| ⥅ Capture and Insert Scene        | *       |      |         |          |
| ❶ Fixed Length Rec 1 Bar          | *       |      |         |          |
| ❷ Fixed Length Rec 2 Bars         | *       |      |         |          |
| ❹ Fixed Length Rec 4 Bars         | *       |      |         |          |
| ❽ Fixed Length Rec 8 Bars         | *       |      |         |          |
| ↕ Scroll Scenes                     |         |      |         | *        |

## Tracks Actions

| Actions                           | Buttons | LEDs | Sliders | Encoders |
|-----------------------------------|---------|------|---------|----------|
| ✽ Current Track Color             |         | *    |         |          |
| ← Sel Prev Track                  | *       | *    |         |          |
| → Sel Next Track                  | *       | *    |         |          |
| ▷ Launch Clip                     | *       | *    |         |          |
| ⌧ Mute                            | *       | *    |         |          |
| S Solo                            | *       | *    |         |          |
| ⌻ Arm                             | *       | *    |         |          |
| ■ Stop                            | *       |      |         |          |
| ↳ Find Empty Slot                 | *       |      |         |          |
| ☆ Add Audio Track                 | *       |      |         |          |
| ✬ Add MIDI Track                  | *       |      |         |          |
| U Fold/Unfold Track               | *       |      |         |          |
| ⟊ Volume                            |         |      | *       | *        |
| ◠ Pan                               |         |      | *       | *        |
| A Send A                            |         |      | *       | *        |
| B Send B                            |         |      | *       | *        |
| ① Selected Device Param 1           |         |      | *       | *        |
| ② Selected Device Param 2           |         |      | *       | *        |
| ③ Selected Device Param 3           |         |      | *       | *        |
| ④ Selected Device Param 4           |         |      | *       | *        |

## Looper Actions

| Actions                           | Buttons | LEDs | Sliders | Encoders |
|-----------------------------------|---------|------|---------|----------|
| ◈ Looper State                    |         | *    |         |          |
| ⧀ Prev Looper                     | *       | *    |         |          |
| ⧁ Next Looper                     | *       | *    |         |          |
| ⌻ Arm Looper Track                | *       | *    |         |          |
| ⌧ Mute Looper Track               | *       | *    |         |          |
| ▣ Stop Looper                     | *       |      |         |          |
| ∅ Clear All                       | *       |      |         |          |
| ⊕ Add Looper                      | *       |      |         |          |
| ◈ State (LOOPER1)                 |         | *    |         |          |
| ◈ State (LOOPER2)                 |         | *    |         |          |
| ◈ State (LOOPER3)                 |         | *    |         |          |
| ◈ State (LOOPER4)                 |         | *    |         |          |
| ◈ State (LOOPER5)                 |         | *    |         |          |
| ◈ State (LOOPER6)                 |         | *    |         |          |

## Setlist Actions

| Actions                           | Buttons | LEDs | Sliders | Encoders |
|-----------------------------------|---------|------|---------|----------|
| ⏮️ Prev Song                       | *       | *    |         |          |
| ⏭️  Next Song                      | *       | *    |         |          |
| ▶️ Launch setlist Song             | *       |      |         |          |
| ▶️Ⓠ Launch setlist Song No Q       | *       |      |         |          |

## Variations Actions

| Actions                           | Buttons | LEDs | Sliders | Encoders |
|-----------------------------------|---------|------|---------|----------|
| ⍇ Prev Device                     | *       |      |         |          |
| ⍈ Next Device                     | *       |      |         |          |
| ⌃ Prev Variation                  | *       |      |         |          |
| ⌵ Next Variation                  | *       |      |         |          |
| ▹ Launch Variation                | *       |      |         |          |
| ◦ Store Variation                 | *       |      |         |          |
| ⌁ Randomize Macros                | *       |      |         |          |
| ↩︎ Recall Last Used                | *       |      |         |          |

## Pages Actions

| Actions                           | Buttons | LEDs | Sliders | Encoders |
|-----------------------------------|---------|------|---------|----------|
| ⇆ Page 1/2                        | *       |      |         |          |
| ⇆ Page 1/3                        | *       |      |         |          |
| ↩ Prev Page                       | *       |      |         |          |
| ↪ Next Page                       | *       |      |         |          |



<p align=center>All CC messages are sent on Channel 16.</p>

# Setup examples

<a id="examples"></a>  
<p align=center>Here are a few examples of configurations (click to zoom).</p>

{% include gallery id="gallery_examples" %}

#  For the Makers {#makers}

## List of components

<img src="../assets/images/maker_components_numbers.jpg" class="my_header2" width=400px/>

1. 8x 6.35mm Jacks
2. 6x LED light guides
3. 1x USB Socket (already soldered)
4. 2x 3.5mm Jacks (MIDI)
5. 2x Encoders with caps
6. PCB Board

## Switches and Pots

You can solder the included 6.35mm Jacks directly to the PCB. 
If you intend to also solder the included [Encoders](#encoders), it is advised to do that first.

<img src="../assets/images/jacks_back.jpeg" class="my_header2" width=400px/>

<img src="../assets/images/jacks_front.jpeg" class="my_header2" width=400px/>

You can also connect JST cables like [this](https://www.amazon.fr/gp/product/B07449V33P/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) and solder them at the bottom of the PCB board.

<img src="../assets/images/switch_slots_2.jpeg" class="my_header2" width=400px/>

The switches are labelled SW1 to SW8 (SW7 & SW8 are the Encoder switches). 
You can connect any type of momentary switch or button.

<img src="../assets/images/switch_slots.jpeg" class="my_header2" width=400px/>

You can also connect any potentiometer to the deported slots. 
The variable pin should be connected to the pins labelled A0 and A1.

<img src="../assets/images/potentiometer_slots.jpeg" class="my_header2" width=400px/>

## MIDI

You can use the included mini jacks sockets or you can use standard DIN5 sockets.

<img src="../assets/images/MIDI_slots.jpeg" class="my_header2" width=400px/>

The numbers 4 and 5 on the board refer to this diagram, with pin 2 connected to GND :
<p align=center>
<img src="../assets/images/midi_socket.jpg"  width=200px/>
</p>

## USB

For testing reasons, the USB socket is already conected. However, you can add another socket by using the extra pads.
NB: you won't be able to connect 2 USB cables simultaneously.

<img src="../assets/images/usb_slot.jpeg" class="my_header2" width=400px/>

## Encoders {#encoders}

There are 2 encoders provided that can be soldered on the board. If you intend to solder the 6.35mm Jack sockets, it is advised to solder the encoders first then the jacks. 
**Before you start soldering, make sure all the legs are inside the holes, they can bend easily when you insert the encoders.**
The CH A1, CH B1, CH A2 and CH B2 are respectively pins 11, 12, 9 & 10 on the RP2040, which means that they can be used for other purposes than an encoder.

See the [List of RP2040 pins](#RP2040pins) for further details.

<img src="../assets/images/encoders_slots.jpeg" class="my_header2" width=400px/>


## List of RP2040 pins {#RP2040pins}

| Pin | Purpose          |
|-----|------------------|
|   0 | Tx               |
|   1 | Rx               |
|   2 | Switch 1         |
|   3 | Switch 2         |
|   4 | Switch 3         |
|   5 | Switch 4         |
|   6 | Switch 5         |
|   7 | Switch 6         |
|   8 | RGB LEDs         |
|   9 | Encoder 2 Ch A   |
|  10 | Encoder 2 Ch B   |
|  11 | Encoder 1 Ch A   |
|  12 | Encoder 1 Ch B   |
|  13 | Encoder 2 Switch |
|  14 | Encoder 1 Switch |
|  15 |                  |
|  16 | LED Matrix Row 1 |
|  17 | LED Matrix Row 2 |
|  18 | LED Matrix Row 3 |
|  19 | LED Matrix Row 4 |
|  20 | LED Matrix Row 5 |
|  21 | LED Matrix Row 6 |
|  22 | toggle_Col       |
|  23 | clock_Col        |
|  24 | latch_Col        |
|  25 | data_Col         |
|  26 | A0               |
|  27 | A1               |

