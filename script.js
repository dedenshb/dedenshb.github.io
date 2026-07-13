particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#ff4444" }, /* Titik berwarna merah neon */
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": { "enable": false }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": { "enable": false }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ff4444", /* Garis penghubung berwarna merah */
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 1 } }
    }
  },
  "retina_detect": true
});
// KODE LOGIKA UNTUK TOMBOL SEE MORE PROJECTS
document.getElementById('load-more-btn').addEventListener('click', function() {
    // Mencari semua kartu proyek yang memiliki kelas hidden-project
    var hiddenProjects = document.querySelectorAll('.hidden-project');
    
    hiddenProjects.forEach(function(project) {
        // Menghapus kelas sembunyi agar proyeknya langsung muncul
        project.classList.remove('hidden-project');
    });
    
    // Menyembunyikan tombol "See More Projects" setelah semua proyek tampil
    this.style.display = 'none';
});