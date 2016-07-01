var Kamaleon = {

    // Fuzzy rules and ranges for temperature.
    fuzzy : function(fuzzySet)
    {
          if(fuzzySet[0] < 0) // Very Cold
            this.defuzzy(1);
          if(fuzzySet[0] > 0 && fuzzySet[0] < 20) // Cold
            this.defuzzy(2);
          if(fuzzySet[0] > 20 && fuzzySet[0] < 27) // Tempered
            this.defuzzy(3);
          if(fuzzySet[0] > 27 && fuzzySet[0] < 35) // Hot
            this.defuzzy(4);
          if(fuzzySet[0] > 35) // Very Hot
            this.defuzzy(5);
    },

    // This function will do the actions. Defuzzy.
    defuzzy : function(action)
    {
      if(action == 1) // Switch to very hot.
        $('body').animate().css({'background':'#c0392b'});
      if(action == 2) // Switch to hot.
        $('body').animate().css({'background':'#f39c12'});
      if(action == 4) // Switch to cold.
        $('body').animate().css({'background':'#27ae60'});
      if(action == 5) // Switch to very cold.
        $('body').animate().css({'background':'#2980b9'});
    }
}
