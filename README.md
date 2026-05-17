# Ultimate Sword — Minecraft Bedrock Addon

Kills every entity in a **10-block radius** on hit. You are never affected.

## Compatibility
- Minecraft Bedrock **1.21.0 +** (tested target: 1.21.132)
- Requires `@minecraft/server` 1.13.0 (included in 1.21.20 +)

## Installation

1. Copy `behavior_pack/` into your world's `development_behavior_packs/` folder.
2. Copy `resource_pack/` into your world's `development_resource_packs/` folder.
3. Open the world settings → **Experiments → Holiday Creator Features** (required for custom items).
4. Activate both packs on the world.

**Default paths**

| Platform | Path |
|----------|------|
| Windows | `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\` |
| Android | `/sdcard/games/com.mojang/` |
| iOS | Files app → On My iPhone → Minecraft |

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

`scripts/main.js` subscribes to `entityHitEntity`. When you land a hit with the
sword, it queries every entity within 10 blocks of your position (excluding you)
and calls `entity.kill()` on each one instantly.

- Base damage: 100
- Durability: 32 767 (effectively unbreakable)
- The wielding player is **always excluded** from the AOE kill
