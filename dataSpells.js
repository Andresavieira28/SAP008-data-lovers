export function filterSPells(spell_type, spells) {
    return spells.filter((x) => x.spell_type === spell_type);
}
