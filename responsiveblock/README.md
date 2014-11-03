Responsive Block
=========

The property has 3 parameters

* Medium
* Small
* XSmall

## Usage
```css
.cssClass{
	font-size:5em;
	color:#000;
    .responsive-block(
	{
		font-size:3em;
		color:#333;
	},
	{
		font-size:2em;
		color:#aeaeae;
	},
	{
		font-size:1em;
		background:#000;
		color:#fff;
	}
	);
}
```

## Renders
```css
.cssClass {
  font-size: 5em;
  color:#000;
}
@media (min-width: 536px) and (max-width: 768px) {
  .cssClass {
    font-size: 3em;
	color:#333;
  }
}
@media (min-width: 481px) and (max-width: 535px) {
  .cssClass {
    font-size: 2em;
	color:#aeaeae;
  }
}
@media (max-width: 480px) {
  .cssClass {
    font-size: 1em;
	background:#000;
	color:#fff;
  }
}
```