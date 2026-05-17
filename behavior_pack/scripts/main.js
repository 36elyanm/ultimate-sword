import { world, EquipmentSlot } from "@minecraft/server";

const SWORD_ID = "ultimate_sword:ultimate_sword";
const KILL_RADIUS = 10;

world.afterEvents.entityHitEntity.subscribe((event) => {
  const { damagingEntity } = event;

  if (damagingEntity?.typeId !== "minecraft:player") return;

  const player = damagingEntity;
  const equippable = player.getComponent("minecraft:equippable");
  if (!equippable) return;

  const heldItem = equippable.getEquipment(EquipmentSlot.Mainhand);
  if (!heldItem || heldItem.typeId !== SWORD_ID) return;

  const nearbyEntities = player.dimension.getEntities({
    location: player.location,
    maxDistance: KILL_RADIUS,
    excludeEntities: [player]
  });

  for (const entity of nearbyEntities) {
    try {
      if (entity.isValid()) {
        entity.kill();
      }
    } catch (_) {
      // entity already dead or unkillable (e.g. dropped items)
    }
  }
});
