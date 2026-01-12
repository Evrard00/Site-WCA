# Directives Responsive WCA - Documentation Complète

## 📱 Breakpoints Définis

```css
Mobile:        320px - 479px  (Extra small devices)
Tablet Small:  480px - 767px  (Phones & small tablets)
Tablet:        768px - 1023px (Tablets)
Desktop:       1024px+        (Desktops & large screens)
```

## 🎯 Principes Mobile-First

### 1. Approche Progressive
- **Base**: Styles mobile optimisés (320px min)
- **Tablet**: Améliorations à 768px
- **Desktop**: Optimisations à 1024px+

### 2. Hiérarchie Responsive

#### Navbar
- **Mobile** (< 768px):
  - ✅ Hamburger menu visible
  - ✅ Menu en dropdown (max-height animation)
  - ✅ Bouton CTA réduit (padding: 10px 16px)
  - ✅ Navigation verticale sur clic
  - ✅ Logo + Hamburger + CTA visibles

- **Tablet** (768px - 1023px):
  - ✅ Menu horizontal possible
  - ✅ Hamburger optionnel ou toujours présent
  
- **Desktop** (1024px+):
  - ✅ Hamburger caché
  - ✅ Menu horizontal complet
  - ✅ CTA bouton normal

#### Grilles de Contenu
- **Mobile** (< 768px):
  - 1 colonne maximum
  - Padding: var(--spacing-sm) = 16px
  
- **Tablet** (768px - 1023px):
  - 2 colonnes
  - Padding: var(--spacing-md) = 24px
  
- **Desktop** (1024px+):
  - 3+ colonnes selon section
  - Padding: var(--spacing-lg) = 32px

#### Boutons
- **Mobile** (< 768px):
  - ✅ Pleine largeur sur formulaires
  - ✅ Padding: 12px 16px minimum
  - ✅ Font-size: 0.95rem minimum
  - ✅ Hauteur: 44px minimum (accessibilité)
  
- **Desktop** (1024px+):
  - Largeur contrôlée par layout

#### Images
- **Mobile** (< 768px):
  - ✅ max-width: 100%
  - ✅ Masquer images décoratives
  - ✅ Réduire résolution (srcset)
  
- **Desktop** (1024px+):
  - Affichage complet

### 3. Typographie Responsive

```css
Mobile:
- Titre principal (h1): 24px - 32px
- Titre section (h2): 20px - 24px
- Texte corps: 14px - 16px

Tablet:
- Titre principal (h1): 32px - 42px
- Titre section (h2): 24px - 28px
- Texte corps: 15px - 16px

Desktop:
- Titre principal (h1): 42px - 52px
- Titre section (h2): 28px - 36px
- Texte corps: 16px - 18px
```

### 4. Espacement Responsive

```css
Variables CSS définies:
--spacing-xs: 8px (mobile)
--spacing-sm: 16px (mobile)
--spacing-md: 24px (tablet)
--spacing-lg: 32px (desktop)
--spacing-xl: 48px (desktop)
--spacing-xxl: 64px (desktop)

Media Query (768px):
--spacing-xs: 12px
--spacing-sm: 20px
--spacing-md: 24px
--spacing-lg: 32px
--spacing-xl: 48px
--spacing-xxl: 60px
```

### 5. Flex & Grid Responsive

**Services Grid:**
```css
Mobile:  1 colonne (100% - padding)
Tablet:  2 colonnes
Desktop: 3 colonnes
```

**Fleet Section:**
```css
Mobile:  Carousel avec scroll horizontal
Tablet:  2 items visibles
Desktop: 3+ items avec carousel
```

**Commitments Grid:**
```css
Mobile:  1 colonne
Tablet:  2 colonnes
Desktop: 3 colonnes
```

### 6. Formulaires Responsive

**Mobile (< 768px):**
- ✅ Full-width form inputs
- ✅ Stack labels & inputs
- ✅ Boutons pleine largeur
- ✅ Font-size min 16px (prevent zoom)
- ✅ Padding min 12px sur inputs
- ✅ Min-height: 44px sur inputs/buttons

**Desktop (1024px+):**
- 2 colonnes possibles
- Inputs avec max-width

### 7. Modales & Overlays

**Mobile:**
- ✅ Full viewport height
- ✅ Bottom sheet possibility
- ✅ Padding: 16px

**Desktop:**
- Centered modal
- Max-width: 500px

## 🔍 Checklist Responsive

- [ ] Navbar avec hamburger menu (mobile)
- [ ] Grilles 1 colonne mobile → 3 colonnes desktop
- [ ] Boutons pleine largeur sur mobile
- [ ] Images adaptatives (srcset, object-fit)
- [ ] Font-size min 16px sur inputs (prevent zoom)
- [ ] Touch targets min 44x44px
- [ ] Padding/margin progressif par breakpoint
- [ ] Footer responsive
- [ ] Modales centrées
- [ ] Carousel pour mobile (horizontal scroll)
- [ ] Tests sur vrais appareils

## 📐 Media Queries Standard

```css
/* Tablet & Down */
@media (max-width: 1023px) { }

/* Tablet small */
@media (max-width: 767px) { }

/* Mobile landscape */
@media (max-width: 479px) { }
```

## ✅ Priorités d'Implémentation

1. **Navbar** - Menu burger fonctionnel
2. **Grilles** - 1 colonne mobile
3. **Boutons** - Pleine largeur
4. **Formulaires** - Accessibilité tactile
5. **Images** - Responsive & optimisées
6. **Footer** - Pleine largeur
7. **Sections** - Padding progressif

## 🚀 Performance Mobile

- [ ] Images optimisées (< 100KB par image)
- [ ] CSS minifié
- [ ] Fonts optimisées (2 max)
- [ ] Lazy loading images
- [ ] Minimiser repaints/reflows
- [ ] Hamburger sans dépendances externes

