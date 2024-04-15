var Z = Object.defineProperty;
var m = (a, s) => Z(a, "name", { value: s, configurable: !0 });
var K = (a, s, t) => {
  if (!s.has(a))
    throw TypeError("Cannot " + t);
};
var b = (a, s, t) => {
  if (s.has(a))
    throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(a) : s.set(a, t);
};
var h = (a, s, t) => (K(a, s, "access private method"), t);
const y = { id: "pf2e-ap200-seven-dooms-for-sandpoint", title: "Seven Dooms for Sandpoint", description: "The town of Sandpoint has seen more than its fair share of danger and trouble over the years, including harrowing fires, prolific serial killers, goblin raids, and attacks by giants and dragons, but what faces the so-called Light of the Lost Coast now is its greatest threat yet! Something sinister has been manipulating events all along, and now a new band of heroes must step in to save this legendary small town from seven deadly dooms!", manifest: "https://cdn.paizo.com/foundry/modules/pf2e-ap200-seven-dooms-for-sandpoint/module.json", url: "https://paizo.com/products/btq02f0z?Pathfinder-Adventure-Path-Seven-Dooms-for-Sandpoint-BUNDLE", version: "1.0.0", media: [{ type: "cover", url: "https://cdn.paizo.com/e7fd0eeb-9d7d-006b-7558-1a3e2f7bd8df/b774b61a-b98d-4ef0-9094-53ae2e1f54e7/PZO90200.jpg", loop: !1, flags: {} }, { type: "icon", url: "https://cdn.paizo.com/image/navigation/Nav-Logo-Global.png", loop: !1, flags: {} }], packs: [{ name: "adventures", label: "Seven Dooms for Sandpoint", path: "packs/adventures", system: "pf2e", ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" }, type: "Adventure", flags: {} }, { name: "items", label: "Items", path: "packs/items", system: "pf2e", ownership: { PLAYER: "NONE", ASSISTANT: "OWNER" }, type: "Item", flags: { sigil: { static: !0 } } }], scripts: [], esmodules: ["./index.js"], styles: ["./style.css"], authors: [{ name: "Paizo", url: "https://paizo.com/", flags: {} }], compatibility: { minimum: "11.315", verified: "11" }, relationships: { recommends: [{ id: "quick-insert", type: "module", manifest: "https://gitlab.com/fvtt-modules-lab/quick-insert/-/jobs/artifacts/master/raw/module.json?job=build-module", flags: { sigil: { devOnly: !0 } } }, { id: "dice-so-nice", type: "module", manifest: "https://gitlab.com/riccisi/foundryvtt-dice-so-nice/raw/4.6.10/module/module.json", flags: { sigil: { devOnly: !0 } } }], systems: [{ id: "pf2e", manifest: "https://github.com/foundryvtt/pf2e/releases/latest/download/system.json", flags: { sigil: { localDevVersion: { distPath: "dist" } } }, type: "system", compatibility: { minimum: "5.15.0", verified: "5.15.0" } }] }, flags: { "pf2e-ap200-seven-dooms-for-sandpoint": { adventureImporter: { "Compendium.pf2e-ap200-seven-dooms-for-sandpoint.adventures.Adventure.pf2ap200adv00001": { initialJournalEntryId: "pf2ap20000frontm", initialJournalPageId: "00landing0000000", initialSceneId: "4OYNTOK5HRmcL9Fq", initialLoginScreenBackground: "assets/scenes/fvtt-login.webp", additionalItems: { sYm0DmnCzZ3xZlZP: ["Compendium.pf2e-ap200-seven-dooms-for-sandpoint.items.Item.a4XtQkMXuLUDxOcR"] } } }, "pf2e-art": "modules/pf2e-ap200-seven-dooms-for-sandpoint/image-mapping.json" }, sigil: { sheetClass: "SevenDoomsJournalSheet", parent: "pf2e-ap200-seven-dooms-for-sandpoint", cssClass: "sevendooms", productTitle: "Seven Dooms for Sandpoint", productSlug: "SevenDooms", featureConfigurations: { "distraction-free-mode": !0, "safe-journal-mode": !0, "global-macro-helpers": !0, adventures: !0 }, adventureExports: [{ _id: "pf2ap200adv00001", name: "Seven Dooms for Sandpoint", img: "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/layout/cover_scene.png", caption: "", description: "<p>This special, double sized volume presents a full Adventure Path in a single massive module to celebrate the 200th volume of the Pathfinder Adventure Path!</p><p>The town of Sandpoint has seen more than its fair share of danger and trouble over the years, including harrowing fires, prolific serial killers, goblin raids, and attacks by giants and dragons, but what faces the so-called Light of the Lost Coast now is its greatest threat yet! Something sinister has been manipulating events all along, and now a new band of heroes must step in to save this legendary small town from seven deadly dooms!</p><p>Return to the town where it all began with the Seven Dooms for Sandpoint Adventure Path—a full campaign for 4th- to 11th-level characters that is presented in its entirety in this super-sized volume! Seven Dooms for Sandpoint also includes an updated snapshot of Sandpoint as it stands today, complete with ways to interact with and influence the townsfolk. More Thassilonian secrets, exciting new treasures, and a bestiary of dangerous new monsters round out this milestone Adventure Path volume.</p>", sort: 0, _include: { folders: ["OhJIi1tyCbk07U4V", "OoBKdyMJJqyf2JNJ", "ZYoAoi4VDuqxmUfY", "eS1lxVRpKdfR3RZl", "pf2ap20001sevend", "uS7RKnlQYG5kzg8M"] }, _exclude: {}, flags: { core: { sheetClass: "pf2e-ap200-seven-dooms-for-sandpoint.SigilPF2EAdventureImporter" } } }] } }, packFolders: [{ name: "Seven Dooms", sorting: "m", color: "#011e4b", packs: ["adventures", "items"], folders: [] }], protected: !0 }, p = y.id, Q = y.version, _ = y.flags?.sigil?.productTitle, W = y.flags?.sigil?.productSlug, f = y.flags?.sigil?.cssClass, I = y.flags?.sigil?.featureConfigurations, P = y.flags?.sigil?.sheetClass, X = { packageId: "pf2e-ap200-seven-dooms-for-sandpoint", productSlug: "SevenDooms" };
function ee() {
  Hooks.once("init", async () => {
    const a = game.modules.filter(
      (s) => s.active && s.flags[p]?.adventureImporter
    );
    for (const s of a)
      game.settings.register(s.id, "firstStartup", {
        name: "One-Time Startup Prompt",
        scope: "world",
        config: !1,
        type: Boolean,
        default: !0
      });
    Hooks.on("updateSetting", (s) => {
      if (s.key === "core.moduleConfiguration")
        for (const t of a)
          game.settings.set(t.id, "firstStartup", !s.value[t.id]);
    });
  }), Hooks.on("ready", async () => {
    const a = game.modules.filter(
      (s) => s.active && s.flags[p]?.adventureImporter
    );
    for (const s of a)
      if (game.settings.get(s.id, "firstStartup") && game.user.isGM)
        for (const e of s.packs.filter((n) => n.type === "Adventure")) {
          const o = await game.packs.get(`${s.id}.${e.name}`).getDocuments();
          for (const r of o)
            r.sheet.render(!0);
        }
  }), Hooks.on("activateNote", function(a, s) {
    if (!a.entry)
      return;
    const e = a.document.flags.sigil?.scroll;
    e && (s.scrollTag = e);
  });
}
m(ee, "adventures");
function te() {
  Hooks.once("init", () => {
    game.settings.register(p, "distraction-free", {
      name: "Distraction Free Mode",
      hint: "Replaces Journal borders with a less visually distracting style.",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: (a) => {
        a ? document.querySelectorAll(`.journal-sheet.${f}-wrapper`).forEach((s) => s.classList.add("distraction-free")) : document.querySelectorAll(`.journal-sheet.${f}-wrapper`).forEach((s) => s.classList.remove("distraction-free"));
      }
    });
  });
}
m(te, "distractionFreeMode");
function se() {
  window.sigilMacros = window.sigilMacros ?? {}, window.sigilMacros[`${W.toLowerCase()}Macros`] = {
    async toggleTokens(a, s) {
      let t = !1, e;
      a.sceneId && ({ sceneId: a, ids: s, force: t, state: e } = a), await this.toggleDocumentHiddenState({
        sceneId: a,
        ids: s,
        type: "Token",
        force: t,
        state: e
      });
    },
    async toggleTiles(a, s) {
      let t = !1, e;
      a.sceneId && ({ sceneId: a, ids: s, force: t, state: e } = a), await this.toggleDocumentHiddenState({
        sceneId: a,
        ids: s,
        type: "Tile",
        force: t,
        state: e
      });
    },
    async toggleDoors(a, s) {
      let t = !1, e;
      a.sceneId && ({ sceneId: a, ids: s, force: t, state: e } = a), await this.toggleDocumentHiddenState({
        sceneId: a,
        ids: s,
        type: "Wall",
        force: t,
        state: e
      });
    },
    async toggleSounds(a, s) {
      let t = !1, e;
      a.sceneId && ({ sceneId: a, ids: s, force: t, state: e } = a), await this.toggleDocumentHiddenState({
        sceneId: a,
        ids: s,
        type: "AmbientSound",
        force: t,
        state: e
      });
    },
    async toggleLights(a, s) {
      let t = !1, e;
      a.sceneId && ({ sceneId: a, ids: s, force: t, state: e } = a), await this.toggleDocumentHiddenState({
        sceneId: a,
        ids: s,
        type: "AmbientLight",
        force: t,
        state: e
      });
    },
    async playSound(a) {
      let s, t = !1;
      if (typeof a == "object" && ({ soundUuid: a = "", playing: s, stopAll: t } = a), t)
        for (const n of game.playlists.playing)
          await n.stopAll();
      const e = await fromUuid(a);
      e && (s ??= !e.playing, e.documentName === "PlaylistSound" && (s ? await e.parent.playSound(e) : await e.parent.stopSound(e)), e.documentName === "Playlist" && (s ? await e.playAll() : await e.stopAll()));
    },
    async changeScene({ sceneId: a, ambience: s, weather: t, darkness: e, force: n }) {
      if (canvas.scene.id === a || n) {
        const o = game.scenes.get(a);
        if (!o)
          return;
        const r = {};
        s && (r.playlistSound = o.playlistSound.id === s.ambienceId1 ? s.ambienceId2 : s.ambienceId1), t && (r.weather = o.weather === t.weatherId1 ? t.weatherId2 : t.weatherId1), e && (r.darkness = o.darkness === e.darknessValue1 ? e.darknessValue2 : e.darknessValue1), await o.update(r);
      }
    },
    // legacy call for changeScene
    async changeAmbience(a, s, t) {
      const e = {};
      a.sceneId ? e = a : e.sceneId = a, e.ambience ??= {}, e.ambience.ambienceId1 ??= s, e.ambience.ambienceId2 ??= t, await this.changeScene(e);
    },
    // legacy call for changeScene
    async changeWeather(a, s, t) {
      const e = {};
      a.sceneId ? e = a : e.sceneId = a, e.weather ??= {}, e.weather.weatherId1 ??= s, e.weather.weatherId2 ??= t, await this.changeScene(e);
    },
    async pickTileImage(a, s, t, e, n) {
      a.sceneId && ({ sceneId: a, tileId: s, title: t, prompt: e, tileOptions: n } = a);
      const o = `async function changeTileImage(img, sceneId, tileId) {
        await game.scenes.get(sceneId)?.tiles.get(tileId)?.update({ "texture.src": img });
      }`;
      async function r() {
        await new Promise(async (i) => {
          setTimeout(i, 200), await new Dialog(
            {
              title: t,
              content: l,
              buttons: { Close: { label: "Close" } }
            },
            { width: 300 }
          ).render(!0);
        });
      }
      m(r, "callTileMenu");
      let l = `<style>
      .mhmenumain {
          margin: 1px auto;
          background: url(systems/pf2e/assets/sheet/parchment.webp);
      }
      .mhmenu {
          margin: 1px auto;
          column-count: 1;
          column-width: auto;
      }
      .mhbutton {
          width: 100%;
          height: fit-content;
      }
      </style><script>${o}<\/script><div class="mhmenumain">`;
      l += `<p style="text-align:center;">${e}</p>`, n.forEach((i, d) => {
        l += `<button name="button${d}" class="mhbutton" type="button" onclick="changeTileImage('${i.img}','${a}','${s}')">${i.name}</button>`;
      }), l += "</div><br></div>", r();
    },
    async pickMacro({ title: a, prompt: s, macroOptions: t }) {
      const e = `async function callMacro(macro) {
        let pickedMacro = game.macros.find((m) => m.id === macro.id || (m.name === macro.macroName && m.folder?.id === macro.macroFolder));
        if (pickedMacro) {
          await pickedMacro.execute()
        }
      }`;
      async function n() {
        await new Promise(async (r) => {
          setTimeout(r, 200), await new Dialog(
            {
              title: a,
              content: o,
              buttons: { Close: { label: "Close" } }
            },
            { width: 300 }
          ).render(!0);
        });
      }
      m(n, "callMacroMenu");
      let o = `<style>
      .mhmenumain {
          margin: 1px auto;
          background: url(systems/pf2e/assets/sheet/parchment.webp);
      }
      .mhmenu {
          margin: 1px auto;
          column-count: 1;
          column-width: auto;
      }
      .mhbutton {
          width: 100%;
          height: fit-content;
      }
      </style><script>${e}<\/script><div class="mhmenumain">`;
      o += `<p style="text-align:center;">${s}</p>`, t.forEach((r, l) => {
        o += `<button name="button${l}" class="mhbutton" type="button" onclick="callMacro({macroName: '${r.macroName}', macroFolder: '${r.macroFolder}', id: '${r.id}'})">${r.name}</button>`;
      }), o += "</div><br></div>", n();
    },
    async moveTile(a, s, t) {
      let e;
      if (a.sceneId && ({ sceneId: a, tileId: s, states: t, force: e } = a), canvas.scene.id === a || e) {
        const n = game.scenes.get(a).tiles.get(s);
        let o = !0;
        Object.keys(t[0]).forEach((r) => {
          Object.keys(diffObject(n, t[0])).length > 0 && (o = !1);
        }), n.update(t[o ? 1 : 0]);
      }
    },
    async updateSceneChildDocuments({ sceneId: a, documentName: s, data: t, animate: e = !1 }) {
      let n;
      const o = game.scenes.get(a);
      switch (s) {
        case "Token":
          n = o.tokens;
          break;
        case "Wall":
          n = o.walls;
          break;
        case "AmbientLight":
          n = o.lights;
          break;
        case "Note":
          n = o.notes;
          break;
        case "Tile":
          n = o.tiles;
          break;
        case "AmbientSound":
          n = o.sounds;
          break;
        default:
          return;
      }
      const r = Object.entries(t).reduce((l, [i, d]) => (n.has(i) && l.push({ _id: i, ...d }), l), []);
      return canvas.scene.updateEmbeddedDocuments(s, r, { animate: e });
    },
    async changeToken(a, s, t) {
      let e, n;
      if (a.sceneId && ({ sceneId: a, tokenId: s, states: t, force: e, checkAlive: n } = a), canvas.scene.id === a || e) {
        const o = game.scenes.get(a), r = o.tokens.get(s) || o.tokens.getName(s);
        if (!r || t.length !== 2)
          return;
        if (t[0] = foundry.utils.expandObject(t[0]), t[1] = foundry.utils.expandObject(t[1]), n && game.system.id === "pf2e") {
          let c = !1;
          if (Array.isArray(n))
            for (const u of n)
              c = c || (await fromUuid(u))?.actor?.isDead;
          if (c = c || r.actor.isDead, c) {
            r.actor.update({ "system.attributes.hp.value": 0 });
            return;
          }
        }
        let l = !0;
        Object.keys(diffObject(r, t[0])).length > 0 && (l = !1);
        const { actor: i, ...d } = t[l ? 1 : 0];
        await r.update(d, { animate: !1 }), i && await r.actor.update(i);
      }
    },
    async toggleDocumentHiddenState({ sceneId: a, ids: s, type: t, force: e, state: n }) {
      if (canvas.scene.id === a || e) {
        typeof s == "string" && (s = [s]);
        const { SECRET: o } = CONST.WALL_DOOR_TYPES, r = game.scenes.get(a);
        let l = [], i = [];
        switch (t) {
          case "Tile":
            l = r.tiles.filter((d) => s.includes(d.id)), i = l.map((d) => ({ _id: d.id, hidden: n === void 0 ? !d.hidden : n }));
            break;
          case "Token":
            l = r.tokens.filter((d) => s.includes(d.id)), i = l.map((d) => ({ _id: d.id, hidden: n === void 0 ? !d.hidden : n }));
            break;
          case "Wall":
            s[0] === "all" ? l = r.walls.filter((d) => d.door === o) : l = r.walls.filter((d) => s.includes(d.id)), i = l.map((d) => ({ _id: d.id, ds: n === void 0 ? d.ds === 1 ? 0 : 1 : n }));
            break;
          case "AmbientLight":
            l = r.lights.filter((d) => s.includes(d.id)), i = l.map((d) => ({ _id: d.id, hidden: n === void 0 ? !d.hidden : n }));
            break;
          case "AmbientSound":
            l = r.sounds.filter((d) => s.includes(d.id)), i = l.map((d) => ({ _id: d.id, hidden: n === void 0 ? !d.hidden : n }));
            break;
          default:
            ui.notifications.warn("Attempting to change unknown Document Type");
        }
        i.length > 0 && await r.updateEmbeddedDocuments(t, i);
      }
    }
  }, window.sigilMacros[`${X.productSlug.toLowerCase()}Macros`] = window.sigilMacros[`${W.toLowerCase()}Macros`];
}
m(se, "globalMacroHelpers");
function ae() {
  Hooks.once("init", () => {
    game.settings.register(p, "safe-journal", {
      name: "Journal Freeze Workaround",
      hint: "Workaround for a Chrome issue that can cause all journals to freeze under certain circumstances.",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: (a) => {
        a ? document.querySelectorAll(`.journal-sheet.${f}-wrapper`).forEach((s) => s.classList.add("safe-journal")) : document.querySelectorAll(`.journal-sheet.${f}-wrapper`).forEach((s) => s.classList.remove("safe-journal"));
      }
    });
  });
}
m(ae, "safeJournalMode");
const ne = {
  adventures: ee,
  "distraction-free-mode": te,
  "global-macro-helpers": se,
  "safe-journal-mode": ae
};
for (const [a, s] of Object.entries(ne))
  I?.[a] && s();
const oe = "modules/pf2e-ap200-seven-dooms-for-sandpoint/templates/importer.hbs";
var O, B, A, U;
const N = class N extends AdventureImporter {
  /**
   *  Add adventure stuff
   * @param {Adventure} adventure
   * @param {object} options
   */
  constructor(t, e) {
    super(t, e);
    /* -------------------------------------------- */
    /**
     * Handle toggling the import all checkbox.
     * @param {Event} event  The change event.
     */
    b(this, O);
    /**
     * Handle toggling the don't show again checkbox.
     * @param {Event} event  The change event.
     */
    b(this, A);
    this.options.classes.push(f);
    const n = game.modules.get(this.adventure.compendium.metadata.packageName), {
      initialSceneId: o,
      initialJournalEntryId: r,
      initialJournalPageId: l,
      initialLoginScreenBackground: i,
      chatMessage: d
    } = n.flags?.[p]?.adventureImporter?.[this.adventure.uuid] || {};
    this.importOptions = {}, o && (this.importOptions.activateScene = {
      label: "Activate Initial Scene",
      default: !0,
      handler: () => game.scenes.get(o)?.activate()
    }), r && l && (this.importOptions.displayJournal = {
      label: "Display Introduction Journal Entry",
      default: !0,
      handler: () => {
        game.journal.get(r).sheet.render(!0, { pageId: l });
      }
    }), i && (this.importOptions.customizeJoin = {
      label: "Style Login Screen",
      default: !1,
      handler: async () => {
        const c = {
          id: game.world.id,
          action: "editWorld",
          description: n.description,
          background: `modules/${n.id}/${i}`
        }, u = await foundry.utils.fetchJsonWithTimeout(
          foundry.utils.getRoute("setup"),
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(c)
          }
        );
        game.world.updateSource(u);
      }
    }), d?.label && d?.content && (this.importOptions.chatMessage = {
      label: d.label,
      default: !0,
      handler: () => {
        ChatMessage.create({
          content: d.content,
          whisper: ChatMessage.getWhisperRecipients("GM")
        });
      }
    });
  }
  /**
   *
   */
  get template() {
    return oe;
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async getData(t = {}) {
    const e = await super.getData(), n = game.modules.get(this.adventure.compendium.metadata.packageName);
    return e.importOptions = this.importOptions || {}, e.hasImportOptions = Object.keys(e.importOptions).length > 0, e.dontShowAgain = !game.settings.get(n.id, "firstStartup"), e.changelog = n.changelog, e;
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  activateListeners(t) {
    super.activateListeners(t);
    const e = t[0];
    e.querySelectorAll('input[value="all"]').forEach(
      (n) => n.addEventListener("change", (o) => {
        h(this, O, B).call(this, o);
      })
    ), e.querySelectorAll('input[name="dontShowAgain"]').forEach(
      (n) => n.addEventListener("change", (o) => {
        h(this, A, U).call(this, o);
      })
    ), e.querySelectorAll(".changelog-link").forEach(
      (n) => n.addEventListener("click", (o) => {
        o.preventDefault(), o.stopPropagation();
        const l = game.modules.get(this.adventure.compendium.metadata.packageName).changelog;
        window.open(l, "_blank").focus();
      })
    );
  }
  /* -------------------------------------------- */
  /**
   * Prepare a list of content types provided by this adventure.
   * @returns {{icon: string, label: string, count: number}[]} array of document types, names, and icons.
   * @protected
   */
  _getContentList() {
    return Object.entries(Adventure.contentFields).reduce((t, [e, n]) => {
      const o = this.adventure[e].size;
      return o && t.push({
        field: e,
        icon: CONFIG[n.documentName].sidebarIcon,
        label: game.i18n.localize(o > 1 ? n.metadata.labelPlural : n.metadata.label),
        count: o
      }), t;
    }, []);
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async _prepareImportData(t) {
    this.submitOptions = t;
    const { toCreate: e, toUpdate: n, documentCount: o } = await super._prepareImportData(t);
    return this.applyImportControls(t, e, n), "Scene" in e && await this.mergeCompendiumScenes(e.Scene), "Scene" in n && await this.mergeCompendiumScenes(n.Scene), { toCreate: e, toUpdate: n, documentCount: o };
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async _importContent(t, e, n) {
    const o = await super._importContent(t, e, n);
    for (const [l, i] of Object.entries(this.importOptions ?? {}))
      !i.handler || !this.submitOptions[l] || await i.handler();
    const r = game.modules.get(this.adventure.compendium.metadata.packageName);
    return game.settings.set(r.id, "firstStartup", !1), o;
  }
  /* -------------------------------------------- */
  /**
   *
   * @param scenes
   */
  async mergeCompendiumScenes(t) {
    const e = game.settings.get("core", "defaultToken");
    for (const n of t)
      for (let o of n.tokens)
        o = Object.assign(o, foundry.utils.mergeObject(o, e));
  }
  /* -------------------------------------------- */
  /**
   * Remove adventure content that the user indicated they did not want to import.
   * @param {object} formData  The submitted adventure form data.
   * @param {object} toCreate  An object of document data to create.
   * @param {object} toUpdate  An object of document data to update.
   */
  applyImportControls(t, e, n) {
    const o = t.importFields.filter((l) => l);
    if (o.push("folders"), !o || !Array.isArray(o) || o.some((l) => l === "all"))
      return;
    const r = new Set(o.map((l) => Adventure.contentFields[l].documentName));
    [e, n].forEach((l) => {
      for (const i of Object.keys(l))
        r.has(i) || delete l[i];
      l.Folder && (l.Folder = l.Folder.filter((i) => r.has(i.type)));
    });
  }
};
O = new WeakSet(), B = /* @__PURE__ */ m(function(t) {
  const e = t.currentTarget, n = e.closest(".import-controls"), o = e.checked;
  n.querySelectorAll("input").forEach((r) => {
    r.value !== "folders" && (r.disabled = o), o && (r.checked = !0);
  }), e.disabled = !1;
}, "#onToggleImportAll"), A = new WeakSet(), U = /* @__PURE__ */ m(function(t) {
  const n = t.currentTarget.checked, o = game.modules.get(this.adventure.compendium.metadata.packageName);
  game.settings.set(o.id, "firstStartup", !n);
}, "#onToggleDontShowAgain"), m(N, "SigilAdventureImporter");
let L = N;
var k, x, j, G, M, V;
const $ = class $ extends L {
  /**
   *  Add adventure stuff
   *
   * @param {Adventure} adventure
   * @param {object} options
   */
  constructor(t, e) {
    super(t, e);
    /* -------------------------------------------- */
    /**
     * Merge Actor data with authoritative source data from system compendium packs
     *
     * @param {Actor[]} actors        Actor documents intended to be imported
     * @param {object} importOptions  Form submission import options
     * @returns {Promise<void>}
     */
    b(this, k);
    b(this, j);
    b(this, M);
    this.options.classes.push(f);
    const n = game.modules.get(this.adventure.compendium.metadata.packageName), { additionalItems: o, removeItems: r, partyToken: l } = n.flags?.[p]?.adventureImporter?.[this.adventure.uuid] || {};
    this.additionalItems = o ?? {}, this.removeItems = r ?? {}, l && (this.importOptions.partyToken = {
      label: "Use Adventure Party Token",
      default: !1,
      handler: () => game.actors.party?.update({ img: l })
    });
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async _prepareImportData(t) {
    this.submitOptions = t;
    const { toCreate: e, toUpdate: n, documentCount: o } = await super._prepareImportData(t);
    return this.applyImportControls(t, e, n), "Actor" in e && await h(this, k, x).call(this, e.Actor), "Actor" in n && await h(this, k, x).call(this, n.Actor), "Scene" in e && await this.mergeCompendiumScenes(e.Scene), "Scene" in n && await this.mergeCompendiumScenes(n.Scene), { toCreate: e, toUpdate: n, documentCount: o };
  }
};
k = new WeakSet(), x = /* @__PURE__ */ m(async function(t) {
  for (let e of t) {
    const [, n, o, r, l] = e.flags?.core?.sourceId?.split?.(".") ?? [], i = game.packs.get(`${n}.${o}`);
    if (!i?.index?.has?.(l || r)) {
      i && console.warn(
        `[${n}] Compendium source data for "${e.name}" [${e._id}] not found in pack ${i?.collection}`
      );
      continue;
    }
    const d = await i.getDocument(l), c = d.toObject(), u = (c.items ?? []).filter(h(this, j, G).bind(this, e._id));
    await h(this, M, V).call(this, e._id, u), d.type === "npc" && (e = Object.assign(
      e,
      foundry.utils.mergeObject(c, {
        folder: e.folder,
        img: e.img,
        items: u,
        name: e.name,
        "prototypeToken.name": e.prototypeToken?.name,
        "prototypeToken.texture": e.prototypeToken?.texture,
        "prototypeToken.randomImg": e.prototypeToken?.randomImg,
        "prototypeToken.flags.pf2e": e.prototypeToken?.flags?.pf2e,
        "system.attributes.adjustment": e.system.attributes?.adjustment,
        "system.details.alignment": e.system.details?.alignment,
        "system.details.blurb": e.system.details?.blurb,
        "system.attributes.hp.value": e.system.attributes?.hp?.value,
        "system.details.languages.value": e.system.details?.languages?.value,
        "system.traits.value": e.system.traits?.value,
        "system.traits.size": e.system.traits?.size,
        _id: e._id
      })
    )), d.type === "hazard" && (e = Object.assign(
      e,
      foundry.utils.mergeObject(c, {
        folder: e.folder,
        img: e.img,
        items: u,
        name: e.name,
        "prototypeToken.name": e.prototypeToken?.name,
        "prototypeToken.texture": e.prototypeToken?.texture,
        "prototypeToken.width": e.prototypeToken?.width,
        "prototypeToken.height": e.prototypeToken?.height,
        "system.traits.value": e.system.traits?.value,
        _id: e._id
      })
    )), d.type === "vehicle" && (e = Object.assign(
      e,
      foundry.utils.mergeObject(c, {
        folder: e.folder,
        img: e.img,
        items: u,
        name: e.name,
        "prototypeToken.name": e.prototypeToken?.name,
        "prototypeToken.texture": e.prototypeToken?.texture,
        "prototypeToken.width": e.prototypeToken?.width,
        "prototypeToken.height": e.prototypeToken?.height,
        _id: e._id
      })
    ));
  }
}, "#mergeCompendiumActors"), j = new WeakSet(), G = /* @__PURE__ */ m(function(t, e) {
  return !this.removeItems[t]?.some((n) => n.id === e._id) || !this.removeItems[t]?.some((n) => n.name === e.name);
}, "#filterItems"), M = new WeakSet(), V = /* @__PURE__ */ m(async function(t, e) {
  const n = this.additionalItems[t] ?? [], o = e.map((r) => r._id);
  for (const r of n) {
    const l = (await fromUuid(r)).toObject();
    for (; o.includes(l._id); )
      l._id = randomID();
    o.push(l._id), e.push(l);
  }
}, "#addItems"), m($, "SigilPF2EAdventureImporter");
let E = $;
Hooks.once("init", () => {
  DocumentSheetConfig.registerSheet(Adventure, p, E, {
    label: `${_} Importer`,
    makeDefault: !1
  });
});
const z = class z extends JournalImagePageSheet {
};
m(z, "SigilJournalSheetImagePage");
let T = z;
const ie = "modules/pf2e-ap200-seven-dooms-for-sandpoint/templates/dialog-show.hbs", re = "modules/pf2e-ap200-seven-dooms-for-sandpoint/templates/page-edit.hbs", le = "modules/pf2e-ap200-seven-dooms-for-sandpoint/templates/page-view.hbs", F = class F extends JournalTextPageSheet {
  /**
   *
   */
  get template() {
    return this.isEditable ? re : le;
  }
  /**
   *
   * @param doc
   * @param whisperContent
   */
  async showWhisperDialog(s, t) {
    if (!(s instanceof JournalEntry || s instanceof JournalEntryPage))
      return;
    if (!s.isOwner)
      return ui.notifications.error("JOURNAL.ShowBadPermissions", {
        localize: !0
      });
    if (game.users.size < 2)
      return ui.notifications.warn("JOURNAL.ShowNoPlayers", {
        localize: !0
      });
    const e = game.users.filter((o) => o.id !== game.userId), n = await renderTemplate(ie, { users: e });
    return Dialog.prompt({
      // title: game.i18n.format("JOURNAL.ShowEntry", {name: doc.name}),
      // label: game.i18n.localize("JOURNAL.ActionShow"),
      title: "Whisper Selected Content to...",
      label: "Whisper to Selected Players",
      content: n,
      render: (o) => {
        const r = o.querySelector("form");
        r.elements.allPlayers.addEventListener("change", (l) => {
          const i = l.currentTarget.checked;
          r.querySelectorAll('[name="players"]').forEach((d) => {
            d.checked = i, d.disabled = i;
          });
        });
      },
      callback: async (o) => {
        const r = o.querySelector("form"), l = new FormDataExtended(r).object, i = l.allPlayers ? game.users.filter((c) => !c.isSelf) : l.players.reduce((c, u) => {
          const g = game.users.get(u);
          return g && !g.isSelf && c.push(g), c;
        }, []);
        if (!i.length)
          return;
        const d = i.map((c) => c.id);
        return ChatMessage.create({
          whisper: d,
          content: t
        });
      },
      rejectClose: !1,
      options: { jQuery: !1 }
    });
  }
  /**
   *
   * @param event
   */
  async _onClickReadAloud(s) {
    if (s.preventDefault(), ["IMG", "A"].includes(s.target.tagName))
      return;
    const e = `<div data-sigil-chatable>${s.currentTarget.innerHTML}</div>`;
    this.showWhisperDialog(this.object.parent, e);
  }
  /**
   *
   * @param event
   */
  async _onClickContentLink(s) {
    s.preventDefault();
    const t = s.currentTarget;
    if (!t.dataset.uuid.startsWith("Scene"))
      return;
    const e = game.scenes.get(t.dataset.id);
    e && (s.stopPropagation(), e.view(), e.journal?.sheet?.render(!0, { pageId: e.journalEntryPage }));
  }
  /**
   *
   * @param html
   */
  activateListeners(s) {
    super.activateListeners(s), s[0].querySelectorAll(".read-aloud").forEach((t) => {
      t.addEventListener("click", this._onClickReadAloud.bind(this));
    }), game.user.isGM && s[0].querySelectorAll("a.content-link[type=Scene]").forEach((t) => {
      t.addEventListener("click", this._onClickContentLink.bind(this));
    }), this?.document?.parent?.flags?.sigil?.variations && s[0].querySelectorAll("[data-option][data-variation]").forEach((t) => {
      const e = t.dataset.variation, n = t.dataset.option, o = this.document.parent.flags.sigil.variations.find(
        (r) => r.name === e
      )?.option;
      o && n !== o && (t.style.display = "none");
    });
  }
};
m(F, "SigilJournalSheetPage");
let C = F;
const de = "modules/pf2e-ap200-seven-dooms-for-sandpoint/templates/journal.hbs", R = class R extends JournalSheet {
  /**
   *
   */
  static get defaultOptions() {
    const s = {
      classes: ["sheet", "journal-sheet", "journal-entry", `${f}-wrapper`],
      width: window.innerWidth < 800 ? 720 : 960,
      height: window.innerHeight < 1e3 ? 700 : 800
    };
    return I?.["distraction-free-mode"] && game.settings.get(p, "distraction-free") && s.classes.push("distraction-free"), I?.["safe-journal-mode"] && game.settings.get(p, "safe-journal") && s.classes.push("safe-journal"), foundry.utils.mergeObject(super.defaultOptions, s);
  }
  /**
   *
   */
  get template() {
    return de;
  }
  /**
   *
   * @param options
   */
  getData(s) {
    const t = super.getData(s);
    t.cssClass = f;
    let e = this?.document?.flags?.sigil?.additionalCssClass;
    return typeof e == "string" && (e = e.split(" ")), Array.isArray(e) && e && (t.cssClass = [f, ...e].join(" ")), t;
  }
  /**
   *
   */
  _getPageData() {
    let s = 1;
    return super._getPageData().map((t) => (t?.flags[p]?.pageNumber ? (t.number = t.flags[p].pageNumber, typeof t?.flags[p]?.pageNumber == "number" && (s = t.number + 1)) : t.number = s++, t?.flags[p]?.pageNumberClass && (t.pageNumberClass = t.flags[p].pageNumberClass), t.editable = t.editable && t?.flags[p]?.editable, t));
  }
  /**
   *
   * @param pageNode
   * @param toc
   */
  async _renderHeadings(s, t) {
    return Object.entries(t || {}).forEach(([e, n]) => {
      n.element.classList.contains("no-toc") && delete t[e];
      const o = n.element?.querySelectorAll("span");
      o.length > 0 && (n.text = o[0].textContent);
    }), await super._renderHeadings(s, t);
  }
  /**
   *
   * @param event
   */
  _onResizeMouseDown(s) {
    this._chromeShapeOutsideFreezeWorkaround(!0);
  }
  /**
   *
   * @param event
   */
  _onResize(s) {
    this._onResizeMouseUp(s);
  }
  /**
   *
   * @param event
   */
  _onResizeMouseUp(s) {
    this._chromeShapeOutsideFreezeWorkaround(!1);
  }
  /**
   *
   * @param toggle
   */
  _chromeShapeOutsideFreezeWorkaround(s) {
    this.element[0].classList[s ? "add" : "remove"]("resizing");
  }
  /**
   *
   */
  async minimize() {
    !this.rendered || !this.popOut || [!0, null].includes(this._minimized) || (this._chromeShapeOutsideFreezeWorkaround(!0), await super.minimize());
  }
  /**
   *
   */
  async maximize() {
    !this.popOut || [!1, null].includes(this._minimized) || (await super.maximize(), this._chromeShapeOutsideFreezeWorkaround(!1));
  }
  /**
   *
   */
  async close() {
    !this.rendered || !this.popOut || [!0, null].includes(this._minimized) || (this._chromeShapeOutsideFreezeWorkaround(!0), await super.close());
  }
  /**
   *
   */
  async _renderOuter() {
    const s = await super._renderOuter();
    return s.find("div.window-resizable-handle")[0].addEventListener("pointerdown", this._onResizeMouseDown.bind(this)), s;
  }
  /** @override */
  async _render(s = !1, t = {}) {
    let e = this?.document?.flags?.sigil?.additionalCssClass;
    if (typeof e == "string" && (e = e.split(" ")), t.classes = t.classes || this.constructor.defaultOptions.classes, Array.isArray(e))
      for (const n of e)
        t.classes.includes(n + "-wrapper") || t.classes.push(n + "-wrapper");
    if (t.action === "update" && this._state !== Application.RENDER_STATES.NONE && JSON.stringify(this.options.classes) !== JSON.stringify(t.classes))
      return this.close();
    if (await super._render(s, t), "scrollTag" in t) {
      this._scrollPositions ??= {};
      const n = this._scrollPositions[".scrollable"] ??= [], o = this.element[0].querySelector(`[data-scroll='${t.scrollTag}']`)?.offsetTop;
      if (!o)
        return;
      n.length ? n[1] = o : n.push(0, o), this._restoreScrollPositions(this.element);
    }
  }
};
m(R, "SigilJournalSheet");
let D = R;
Hooks.once("init", () => {
  Object.defineProperty(D, "name", {
    value: `${P}`
  }), Object.defineProperty(C, "name", {
    value: `${P}Page`
  }), Object.defineProperty(T, "name", {
    value: `${P}ImagePage`
  }), DocumentSheetConfig.registerSheet(JournalEntry, p, D, {
    types: ["base"],
    makeDefault: !1,
    canBeDefault: !1,
    label: `${_}`
  }), DocumentSheetConfig.registerSheet(JournalEntryPage, p, C, {
    types: ["text"],
    makeDefault: !1,
    canBeDefault: !1,
    label: `${_}`
  }), DocumentSheetConfig.registerSheet(JournalEntryPage, p, T, {
    types: ["image"],
    makeDefault: !1,
    canBeDefault: !1,
    label: `${_}`
  });
});
const H = /* @__PURE__ */ new Set([
  "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/maps/Map_PG50_Whistlefang_Lair_JasonJuta_Tile_Flame01.webp",
  "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/maps/Map_PG50_Whistlefang_Lair_JasonJuta_Tile_Flame02.webp",
  "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/maps/Map_PG50_Whistlefang_Lair_JasonJuta_Tile_Flame03.webp"
]), ce = /* @__PURE__ */ new Set([
  "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/maps/Map_PG50_Whistlefang_Lair_JasonJuta_Tile_Scorch01.webp",
  "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/maps/Map_PG50_Whistlefang_Lair_JasonJuta_Tile_Scorch02.webp",
  "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/maps/Map_PG50_Whistlefang_Lair_JasonJuta_Tile_Scorch03.webp"
]), q = /* @__PURE__ */ new Set(["modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/maps/blank.webp"]);
Hooks.on("getSceneControlButtons", (a) => {
  if (!canvas?.scene?.getFlag("world", "isBurning"))
    return;
  a.find((t) => t.name === "token").tools.push({
    name: "fire",
    title: "Fire",
    icon: "fas fa-fire",
    toggle: !0,
    active: canvas.scene.getFlag(p, "fireTool"),
    onClick: (t) => {
      canvas.scene.setFlag(p, "fireTool", t);
    },
    button: !0
  });
});
Hooks.on("canvasReady", function(a) {
  if (!a.scene.getFlag("world", "isBurning"))
    return;
  let s = 0;
  a.app.stage.addEventListener("mousedown", () => s = Date.now()), a.app.stage.addEventListener("mousemove", () => s = Date.now() > s + 100 ? 0 : s);
  const t = /* @__PURE__ */ m((i) => (i = Array.from(i), i[Math.floor(Math.random() * i.length)]), "getRandom"), e = /* @__PURE__ */ m((i, d, c = 0.1) => (Math.random() * (d - i) + i).toNearest(c), "getRandomNumber"), n = /* @__PURE__ */ m((i) => {
    const { x: d, y: c } = i.bounds.center, u = e(0, i.bounds.width / 2), g = e(0, 2 * Math.PI), v = Ray.fromAngle(d, c, g, u);
    return { x: Math.round(v.B.x), y: Math.round(v.B.y) };
  }, "getRandomPosition"), o = /* @__PURE__ */ m(() => {
    const i = e(150, 200, 1), d = e(60, 100, 1), c = e(10, 20, 1);
    return Color.fromRGB([i, d, c].map((u) => u / 255)).css;
  }, "getRandomColor"), r = /* @__PURE__ */ m((i) => !a.tokens.active || !a.scene.getFlag(p, "fireTool") ? !1 : !(i.target instanceof Token) && s, "isAllowed"), l = /* @__PURE__ */ m((i, d) => i.x <= d.x && d.x < i.x + i.width && i.y <= d.y && d.y < i.y + i.height && !!i.flags.world?.isFire, "isValidTile");
  a.app.stage.addEventListener("mouseup", function(i) {
    if (!r(i))
      return;
    const d = i.data.getLocalPosition(a.tiles), c = a.tiles.placeables.filter((u) => l(u.document, d));
    for (const u of c) {
      const g = H.has(u.document.texture.src), v = q.has(u.document.texture.src), Y = t(g && a.scene.id !== "aXrJ6aPACNdeVZBP" ? ce : v ? H : q);
      if (u.document.update({ "texture.src": Y }), g) {
        const S = [];
        a.lighting.placeables.forEach((w) => {
          u.bounds.contains(...Object.values(w.center)) && S.push(w.document.id);
        }), a.scene.deleteEmbeddedDocuments("AmbientLight", S);
      } else if (v) {
        const S = e(1, 4, 1), w = [];
        for (let J = 0; J < S; J++)
          w.push({
            config: {
              bright: 5,
              coloration: 0.5,
              dim: 10,
              attenuation: 1,
              luminosity: 0.5,
              saturation: 0.1,
              contrast: 0.1,
              shadows: 0.2,
              animation: {
                type: "flame",
                speed: e(5, 10, 1),
                intensity: e(1, 3, 1)
              },
              color: o()
            },
            ...n(u)
          });
        a.scene.createEmbeddedDocuments("AmbientLight", w);
      }
    }
  });
});
Hooks.once("diceSoNiceReady", (a) => {
  a.addSystem({ id: "trs-pathfinder2-sevendooms", name: "The Rollsmith - Seven Dooms for Sandpoint" }, !1), a.addDicePreset({
    type: "d2",
    labels: "",
    modelFile: "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/models/dice_2.gltf",
    system: "trs-pathfinder2-sevendooms"
  }), a.addDicePreset({
    type: "d4",
    labels: "",
    modelFile: "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/models/dice_4.gltf",
    system: "trs-pathfinder2-sevendooms"
  }), a.addDicePreset({
    type: "d6",
    labels: "",
    modelFile: "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/models/dice_6.gltf",
    system: "trs-pathfinder2-sevendooms"
  }), a.addDicePreset({
    type: "d8",
    labels: "",
    modelFile: "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/models/dice_8.gltf",
    system: "trs-pathfinder2-sevendooms"
  }), a.addDicePreset({
    type: "d10",
    labels: "",
    modelFile: "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/models/dice_10.gltf",
    system: "trs-pathfinder2-sevendooms"
  }), a.addDicePreset({
    type: "d100",
    labels: "",
    modelFile: "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/models/dice_100.gltf",
    system: "trs-pathfinder2-sevendooms"
  }), a.addDicePreset({
    type: "d12",
    labels: "",
    modelFile: "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/models/dice_12.gltf",
    system: "trs-pathfinder2-sevendooms"
  }), a.addDicePreset({
    type: "d20",
    labels: "",
    modelFile: "modules/pf2e-ap200-seven-dooms-for-sandpoint/assets/models/dice_20.gltf",
    system: "trs-pathfinder2-sevendooms"
  });
});
console.log(`[${p}@${Q}...] successfully loaded!`);
