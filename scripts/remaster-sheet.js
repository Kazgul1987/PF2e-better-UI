export class RemasterCharacterSheet extends ActorSheetPF2e {}

Hooks.once("init", () => {
  game.settings.register("pf2e-better-ui", "enableRemasterSheet", {
    name: "Enable Remaster Character Sheet",
    hint: "Registers the PF2e remaster sheet for characters.",
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
    onChange: (value) =>
      value
        ? Actors.registerSheet("pf2e", RemasterCharacterSheet, {
            label: "Remaster Character Sheet",
            types: ["character"],
            makeDefault: false,
          })
        : Actors.unregisterSheet("pf2e", RemasterCharacterSheet),
  });

  if (game.settings.get("pf2e-better-ui", "enableRemasterSheet")) {
    Actors.registerSheet("pf2e", RemasterCharacterSheet, {
      label: "Remaster Character Sheet",
      types: ["character"],
      makeDefault: false,
    });
  }
});
