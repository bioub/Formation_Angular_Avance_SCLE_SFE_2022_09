export function dejaSaisis(nbs: number[]) {
  if (nbs?.length) {
    return;
  }

  console.log('Vous avez déjà saisi : ' + nbs.join(' | '));
}
