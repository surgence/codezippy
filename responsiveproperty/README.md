Responsive Property
=========

The property has 5 parameters

* Property [required]
* Default [required]
* Medium
* Small
* XSmall

## Usage
```css
.cssClass{
    .responsive-property(font-size,2em,1.8em,1.4em,1em);
}
```

## Renders
```css
.cssClass {
  font-size: 2em;
}
@media (min-width: 536px) and (max-width: 768px) {
  .cssClass {
    font-size: 1.8em;
  }
}
@media (min-width: 481px) and (max-width: 535px) {
  .cssClass {
    font-size: 1.4em;
  }
}
@media (max-width: 480px) {
  .cssClass {
    font-size: 1em;
  }
}
```