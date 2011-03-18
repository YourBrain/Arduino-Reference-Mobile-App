var tabGroup = Titanium.UI.createTabGroup();

var tab, win;

win = Titanium.UI.createWindow({  
    title: 'Atmega Pin Map',
    url:   'mapping.js'
});
tab = Titanium.UI.createTab({  
    icon:  'KS_nav_ui.png',
    title: 'Pin Map',
    window: win
});
tabGroup.addTab(tab);  

win = Titanium.UI.createWindow({  
    title: 'Dorkboard Layout',
    url:   'dorkboard-layout.js'
});
tab = Titanium.UI.createTab({  
    icon:  'KS_nav_ui.png',
    title: 'Dorkboard Layout',
    window: win
});
tabGroup.addTab(tab);  

win = Titanium.UI.createWindow({  
    title: 'Dorkboard Schematic',
    url:   'dorkboard-schematic.js'
});
tab = Titanium.UI.createTab({  
    icon:  'KS_nav_ui.png',
    title: 'Dorkboard Schematic',
    window: win
});
tabGroup.addTab(tab);  


tabGroup.open();
