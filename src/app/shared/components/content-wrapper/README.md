USE CASE:
```
<app-content-wrapper
  [includeSummary]="true"
  [subSections]="subSections"
  [bgImgUrl]="'../../../../assets/images/about-header-bg.png'"
  >
    <h2 title> ... </h2>
    <div summary>
      <p> ... </p>
    </div>
    <div content>
      <p> ... </p>
    </div>
  </app-content-wrapper
```

- `[includeSummary]` -> `true`, if you want to show summary on the page header -
  the summary appears on the right of the header and title on the left.
  if `false`, only title appears.
- `[subSections]` -> the list of subtitles for navigating on subsections within the page.
- `[bgImgUrl]` -> header background image url.

