# LambDynamicLights


[![GitHub license](https://img.shields.io/badge/license-Lambda%20License-c7136d?style=flat-square)](https://raw.githubusercontent.com/LambdAurora/LambDynamicLights/1.21.2/LICENSE)
![Environment: Client](https://img.shields.io/badge/environment-client-1976d2?style=flat-square)
[![Mod loader: Fabric]][fabric]

The most feature-complete dynamic lighting mod for Fabric.

## 📖 What's this mod?

It's dark outside, extremely dark...
You can't see a lot in the darkness, you wish you had a torch,
or a lantern to hold and see in the light...

And this is now possible with this mod as it adds dynamic lights to the game.
You can see in the darkness thanks to your torch now!

This mod adds dynamic lights to Minecraft. Dynamic lights are lights created by an entity holding an
item which makes light as a block, or created by an entity on fire, etc.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xew0s2TwZ84" title="Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>

Searching other mods to replace OptiFine? [Check out this list!](https://optifine.alternatives.lambdaurora.dev/)

## ✅ Features:

- Dynamic lighting.
- Settings to select how smoothly the dynamic lighting updates.
- Any entity holding an item which emits light will emit light!
  - Item lighting can be customized through resource-packs and can work with modded items!
  - Some items like torches, soul torches, etc. will not light up in water.
- Various entities will naturally emit light, like:
  - Allays
  - Blazes
  - Fireballs
  - Glow squids
  - Magma cubes
  - Spectral arrows
- Burning entities emit light.
- Quick and simple API for developers and resource pack makers.
  - Check out [the documentation][documentation] for more details!
- And more!

## Screenshots

### Items emit light

Dropped items which already emit light as a block, will also dynamically emit light!

![Dropped lantern](assets/lantern_study.png)

### Held items emit light

Light is emitted when entities hold light emitting items.

![Torch](assets/torch.png)
![Fox holding glowberries](assets/fox_holding.png)

### Fire! Fire! Fire!

Any entity on fire will emit light!

![An Aurora is on fire!](assets/fire.png)
![Arrow on fire!](assets/fire_arrow.png)

### Explosion imminent!

Creepers can make their imminent explosions more apparent through a progressive emission of light!

![Quick! Need to protect myself from this Creeper!](assets/creeper.png)

### Glow Squids!

The infamous glow squids finally glow in your world!

![A group of glow squids](assets/glow_squid.png)

### Guardian Lasers!

Wait... what? **Lasers?!** They do pack a punch...

![light levels](assets/guardian_laser.png)

### Fireflies

Fireflies particle will emit light as they fly!

![Fireflies](assets/fireflies.png)

### Configuration GUI

As of v4.0.0.

![Configuration GUI](assets/settings_main.png)
![Entities Configuration](assets/settings_entities.png)

## 📖 Usage

Using this mod is very simple!

Install it in your mods folder along with [Fabric API] and [ModMenu], (and [Sodium] if wanted for better performances).

It will work as-is. If you want, you can configure the mod through its settings screen by heading to the video settings or via [ModMenu].

Need help? Come check out [my Discord server][LambdAurora Discord].

## 📖 Is there an API? How to use it as a developer?

[Check out this in-depth documentation][documentation].

## 📖 How does it work internally?

[Check out this document I've written on the fundamentals of it](https://github.com/LambdAurora/LambDynamicLights/blob/1.21/HOW_DOES_IT_WORK.md).





## 📖 Compatibility

- [Sodium] is recommended for better performances.
- **OptiFabric is obviously incompatible.**

[fabric]: https://fabricmc.net
[Mod loader: Fabric]: https://img.shields.io/badge/modloader-Fabric-1976d2?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTEyLTE2VDE2OjU0OjE3LTA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNy0yOFQyMToxNzo0OC0wNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNy0yOFQyMToxNzo0OC0wNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZWRiMWMyYy1mZjhjLWU0NDEtOTMxZi00OTVkNGYxNGM3NjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MGVkYjFjMmMtZmY4Yy1lNDQxLTkzMWYtNDk1ZDRmMTRjNzYwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MGVkYjFjMmMtZmY4Yy1lNDQxLTkzMWYtNDk1ZDRmMTRjNzYwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZWRiMWMyYy1mZjhjLWU0NDEtOTMxZi00OTVkNGYxNGM3NjAiIHN0RXZ0OndoZW49IjIwMTgtMTItMTZUMTY6NTQ6MTctMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4/HiGMAAAAtUlEQVRYw+XXrQqAMBQF4D2P2eBL+QIG8RnEJFaNBjEum+0+zMQLtwwv+wV3ZzhhMDgfJ0wUSinxZUQWgKos1JP/AbD4OneIDyQPwCFniA+EJ4CaXm4TxAXCC0BNHgLhAdAnx9hC8PwGSRtAFVMQjF7cNTWED8B1cgwW20yfJgAvrssAsZ1cB3g/xckAxr6FmCDU5N6f488BrpCQ4rQBJkiMYh4ACmLzwOQF0CExinkCsvw7vgGikl+OotaKRwAAAABJRU5ErkJggg==
[Fabric API]: https://www.curseforge.com/minecraft/mc-mods/fabric-api "Fabric API CurseForge page"
[ModMenu]: https://modrinth.com/mod/modmenu
[Sodium]: https://www.curseforge.com/minecraft/mc-mods/sodium "Sodium CurseForge page"
[documentation]: https://lambdaurora.dev/projects/lambdynamiclights/docs/v4/ "The documentation page of LambDynamicLights"
[LambdAurora Discord]: https://discord.lambdaurora.dev
