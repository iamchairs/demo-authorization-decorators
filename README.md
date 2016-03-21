# First Time Installs

If you do not have already. Install typescript, tsd, tsc, and babel globally

  sudo npm install -g typescript
  sudo npm install -g tsc
  sudo npm install -g tsd
  sudo npm install -g babel-cli

# Setup

Install node modules and typedefs

  npm install
  tsd install

# Run

Run the sh/ps1 file. This will compile typescript, then babel, and run the
es5 compiled `dist/final.js` file.

  # Unix
  ./start.sh

  # Windows
  ./start.ps1
