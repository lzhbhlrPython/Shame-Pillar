# Shame Pillar

To start the project, you should:

1. create `src/assets/shameItems.json` like
```json
{   
    "watermark": "This is a watermark",
    "shame":[
        {
            "title": "Shame Item 1",
            "date": "2022-01-01",
            "description": "This is shame item 1"
        },
        {
            "title": "Shame Item 2",
            "date": "2022-02-01",
            "description": "This is shame item 2"
        },
        {
            "title": "Shame Item 3",
            "date": "2022-03-01",
            "description": "This is shame item 3"
        }
    ]
}

```
If you don't want a watermark, just leave it blank.

2.rewrite the introduction at `src/introduction.tsx`

**Some tips:**

- the largest title smaller than `###`
- support the grammar of Github
- support Katex
- NO" ` "

3. rewrite the infomation at `App.tsx`