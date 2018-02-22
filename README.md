# About this repository
# Best practices
1. Don't use overloaded CSS selectors   
```css
/* bad */
img[src$=svg], ul > li:first-child {
  opacity: 0;
}

/* good */
[src$=svg], ul > :first-child {
  opacity: 0;
}
```
> [Source: Front-end Guidelines by bendc](https://github.com/bendc/frontend-guidelines#selectors)

2. Don't override styling with other styling, try combining selectors as much as possible  
```css
/* bad */
li {
  visibility: hidden;
}
li:first-child {
  visibility: visible;
}

/* good */
li + li {
  visibility: hidden;
}
```
> [Source: Front-end Guidelines by bendc](https://github.com/bendc/frontend-guidelines#overriding)

3. Explain which div you're closing
```html
<div id="header">
  <div id="sub" class="first left">
    ...
  </div><!-- #sub.first.left -->
</div><!-- #header -->
```
> [Source](https://www.catswhocode.com/blog/top-10-best-practices-for-front-end-web-developers)

4.
5.
# Image Gallery
# Async API Data
