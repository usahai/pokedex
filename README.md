# Getting Started with Pokedex!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What this is

It is a simple application built as a project to try and learn new things. I have tried to use things that are new to me as far as possible, with the hope that I will stumble onto the profound knowledge that I know my college was not.

## What this is not

It is not the absolute best way of doing certain things. I understand that there are choices I have made here that probably will not fly in a production environment. I have done my best to detail what works, and what needs to be work-shopped. Please raise an issue if you feel that I have missed something major.

## What this project achieves

- Virtualization
- Infinite Scrolling
- State manager
- TailwindCSS
- Light/Dark mode (I know it's an extension of what tailwind can do, but I'm still super psyched about it)

## What I did it without

- No components library - everything is vanilla! (at least, as far as I can tell)

## What needs to be workshopped 🚧

- True virtualization - currently, for items that are out of the viewport, it renders empty `divs`. In an ideal scenario, we would like for those `divs` to disappear as well, otherwise we end up with a whole bunch of empty divs. This is still better than keeping everything in the DOM though. That would be much worse, so I take this win
- Color/design scheming - I lack the creativity bone when it comes to design, and this project is no exception. I would like to eventually improve the PDP on that front
- Add a seperate filters column with new filters - by version, and move types
- Tapping on a move will allow the user to view details about it

## Credits

Deploying to Netlify tutorial - [CoderOne](https://www.youtube.com/watch?v=TVb05-_vdSc)

## Final Thoughts

This project was an interview question for a company that my friend had given. This is my humble attempt at it.
