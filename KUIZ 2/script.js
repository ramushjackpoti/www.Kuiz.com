const pyetjet = [
    {
      pyetja: "Cili është kryeqyteti i Shqipërisë?",
      alternativat: ["Durrës", "Tirana", "Vlorë", "Shkodër"],
      sakt: 1
    },
    {
      pyetja: "Sa është 5 + 7?",
      alternativat: ["10", "11", "12", "13"],
      sakt: 2
    },
    {
      pyetja: "Cila është gjuha zyrtare e Kosovës?",
      alternativat: ["Anglisht", "Shqip", "Serbisht", "Frëngjisht"],
      sakt: 1
    },
    {
      pyetja: "Sa është 9 x 8?",
      alternativat: ["72", "64", "81", "70"],
      sakt: 0
    },
    {
      pyetja: "Në cilin kontinent ndodhet Australia?",
      alternativat: ["Europa", "Australia", "Afrika", "Azia"],
      sakt: 1
    },
    {
      pyetja: "Cili oqean është më i madhi?",
      alternativat: ["Atlantiku", "Oqeani i Qetë", "Indian", "Arktik"],
      sakt: 1
    },
    {
      pyetja: "Sa është rrënja katrore e 64?",
      alternativat: ["6", "8", "10", "7"],
      sakt: 1
    },
    {
      pyetja: "Cila është formula kimike e ujit?",
      alternativat: ["H2O", "CO2", "NaCl", "O2"],
      sakt: 0
    },
    {
      pyetja: "Cili planet është i katërti nga Dielli?",
      alternativat: ["Mars", "Tokë", "Venus", "Jupiter"],
      sakt: 0
    },
    {
      pyetja: "Cili vit shpalli Shqipëria pavarësinë?",
      alternativat: ["1910", "1912", "1920", "1930"],
      sakt: 1
    }
  ];
  
  let pyetjaAktuale = 0;
  let piket = 0;

  function shfaqPyetjen() {
    const pyetje = pyetjet[pyetjaAktuale];
    document.getElementById("question").innerText = pyetje.pyetja;
    const buttons = document.querySelectorAll("#answers button");
    buttons.forEach((button, index) => {
      button.innerText = pyetje.alternativat[index];
    });
  }
  
  function kontrolloPergjigjen(pergjigja) {
    if (pergjigja === pyetjet[pyetjaAktuale].sakt) {
      piket++;
    }
    document.getElementById("next").style.display = "block";
  }
  
  function pyetjaTjeter() {
    pyetjaAktuale++;
    if (pyetjaAktuale < pyetjet.length) {
      shfaqPyetjen();
      document.getElementById("next").style.display = "none";
    } else {
      perfundoKuizin();
    }
  }
  
  function perfundoKuizin() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").innerText = piket;
  }
  
  function rifilloKuizin() {
    pyetjaAktuale = 0;
    piket = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    shfaqPyetjen();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    shfaqPyetjen();
  });