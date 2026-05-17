# Ultimate Sword — Minecraft Bedrock Addon

Kills every entity in a **10-block radius** on right-click use. You are never affected.

**No Beta APIs required.** Requires only the **Holiday Creator Features** experiment (custom items).

## Compatibility
- Minecraft Bedrock **1.21.0 +** (including 1.21.132 and Education Edition 26.x)
- Zero Script API — uses entity animation controllers and item events only

## Quick Install (`.mcaddon`)

1. Double-click **`ultimate_sword.mcaddon`** — Minecraft opens and imports both packs automatically.
2. Create or open a world → **Experiments → Holiday Creator Features** (turn on).
3. Both packs are now applied. Done.

## Manual Install

1. Copy `behavior_pack/` → `development_behavior_packs/`
2. Copy `resource_pack/` → `development_resource_packs/`
3. Activate both packs on the world + enable **Holiday Creator Features**.

**Paths**

| Platform | Folder |
|----------|--------|
| Windows | `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\` |
| Android | `/sdcard/games/com.mojang/` |
| iOS | Files → On My iPhone → Minecraft |

## Getting the Sword

### Craft
| Slot | Item |
|------|------|
| Top | Nether Star |
| Middle | Netherite Ingot |
| Bottom | Stick |

### Give command
```
/give @s ultimate_sword:ultimate_sword
```

## How it works

**No Script API is used at all.**

1. Right-clicking the sword fires an `on_use` item event which runs:
   `summon ultimate_sword:nova ~ ~1 ~`
2. The `nova` entity spawns at your position — it is invisible and has no collision.
3. Its behavior-pack animation controller fires instantly on spawn (`on_entry`):
   `execute as @e[family=!ultimate_sword_nova,family=!player,r=10,c=1000] at @s run kill @s`
   — every non-player, non-nova entity within 10 blocks is killed.
4. The nova despawns after 0.5 s via `minecraft:timer`.

The sword itself also deals 100 base damage on direct hit, so everything in melee range dies twice over.

## File structure
```
ultimate_sword.mcaddon        ← double-click to install
behavior_pack/
  manifest.json
  items/ultimate_sword.json
  entities/nova.json
  animation_controllers/nova.animation_controller.json
  recipes/ultimate_sword.json
resource_pack/
  manifest.json
  items/ultimate_sword.json
  textures/item_texture.json
  textures/items/ultimate_sword.png
  texts/en_US.lang
```
