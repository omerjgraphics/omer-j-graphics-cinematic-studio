const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');
function createWindow(){
 const win = new BrowserWindow({
  width: 1600, height: 1000, minWidth: 1000, minHeight: 680,
  backgroundColor: '#062951',
  webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
 });
 win.loadFile(path.join(__dirname,'..','index.html'));
 Menu.setApplicationMenu(Menu.buildFromTemplate([
  {label:'File',submenu:[{label:'Reload',role:'reload'},{label:'Quit',role:'quit'}]},
  {label:'Edit',submenu:[{role:'undo'},{role:'redo'},{type:'separator'},{role:'cut'},{role:'copy'},{role:'paste'},{role:'selectAll'}]},
  {label:'View',submenu:[{role:'togglefullscreen'},{role:'toggleDevTools'}]},
  {label:'Help',submenu:[{label:'About OMER J GRAPHICS',click:()=>shell.openExternal('https://www.behance.net/omerjgraphics')}]}
 ]));
}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
