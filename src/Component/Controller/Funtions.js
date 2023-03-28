//function pour selectionner les 10 mots les plus utiliser(les 10premiers)
export const wordUseMore = (array) => {
    let wordSet = [];
    let words = [];
    for (let i = 0; i < array.length; i++) {
        if (i < 10) {
            wordSet.push(array[i]);
        }
    }
    for (let i = 0; i < wordSet.length; i++) {
        words.push(wordSet[i][0]);
    }
    return words;
}

//fonction pour classer les mots par ordre decroissant
export const sortObject = (obj) =>
Object.fromEntries(
    Object.entries(obj).sort((a, b) => b[1] - a[1])
);

//

export const distance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // rayon de la Terre en kilomètres
    const radLat1 = (Math.PI * lat1) / 180;
    const radLat2 = (Math.PI * lat2) / 180;
    const radLon1 = (Math.PI * lon1) / 180;
    const radLon2 = (Math.PI * lon2) / 180;
    const dLat = radLat2 - radLat1;
    const dLon = radLon2 - radLon1;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

