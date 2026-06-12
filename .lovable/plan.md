

# Refonte couleurs — Bleu marine & Doré

Remplacer le thème cyan/sombre par une palette bleu profond avec accents dorés, élégante et chaleureuse.

## Nouvelle palette

| Variable | Valeur HSL | Rendu |
|----------|-----------|-------|
| background | `220 50% 12%` | Bleu marine profond |
| card | `220 45% 16%` | Bleu marine plus clair |
| foreground | `40 30% 92%` | Blanc chaud légèrement doré |
| primary | `43 85% 55%` | Or lumineux |
| primary-foreground | `220 50% 10%` | Bleu foncé (contraste) |
| secondary | `220 40% 20%` | Bleu-gris |
| muted-foreground | `220 20% 55%` | Gris bleuté |
| accent | `35 80% 45%` | Bronze/ambre |
| border | `220 35% 22%` | Bleu-gris subtil |
| ring | `43 85% 55%` | Doré (comme primary) |

## Fichier modifié : `src/index.css`

- Remplacer les variables `:root` et `.dark` avec la nouvelle palette
- Adapter les effets CSS existants :
  - **grid-pattern** : lignes dorées subtiles au lieu de cyan
  - **profile-ring** : dégradé doré
  - **text-shimmer** : reflets dorés/bronze
  - **spotlight-card** : halo doré au survol
  - **footer-separator** : pulsation dorée

Aucun autre fichier à modifier — tous les composants utilisent les variables CSS.

