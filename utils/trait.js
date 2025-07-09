/**
 * Génère un slug à partir d'une chaîne de caractères
 * @param {string} text - Le titre ou texte à transformer
 * @returns {string} - Le slug formaté
 */
function generateSlug(text) {
    return text
        .toLowerCase()                           // Tout en minuscules
        .normalize('NFD')                        // Décompose les caractères accentués
        .replace(/[\u0300-\u036f]/g, '')         // Supprime les accents restants
        .replace(/[^a-z0-9\s-]/g, '')            // Supprime les caractères spéciaux sauf espaces et tirets
        .trim()                                  // Supprime les espaces au début/fin
        .replace(/[\s_-]+/g, '-')                // Remplace espaces et underscores multiples par un tiret
        .replace(/^-+|-+$/g, '');                // Supprime les tirets de début/fin
}


module.exports = { generateSlug };
