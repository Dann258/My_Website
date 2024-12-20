let links = [
    { nama: "Facebook", link: "(link unavailable)", background: "#3b5998" },
    { nama: "Instagram", link: "(link unavailable)", background: "#e1306c" },
    { nama: "Twitter", link: "(link unavailable)", background: "#1da1f2" },
  ];
  
  function tambahLink() {
    const namaLink = prompt("Masukkan nama link:");
    const link = prompt("Masukkan link:");
    const background = prompt("Masukkan warna background (hex):");
    
    if (namaLink && link && background) {
      links.push({ nama: namaLink, link, background });
      renderLink();
    }
  }
  
  function editLink(index) {
    const namaBaru = prompt("Masukkan nama link baru:");
    const linkBaru = prompt("Masukkan link baru:");
    const backgroundBaru = prompt("Masukkan warna background baru (hex):");
    
    if (namaBaru && linkBaru && backgroundBaru) {
      links[index].nama = namaBaru;
      links[index].link = linkBaru;
      links[index].background = backgroundBaru;
      renderLink();
    }
  }
  
  function renderLink() {
    const linkContainer = document.getElementById("link-sosial-media");
    linkContainer.innerHTML = "";
  
    links.forEach((link, index) => {
      const linkBaru = document.createElement("li");
      linkBaru.innerHTML = `
        <div class="link-item" style="background-color: ${link.background}">
          <img src="link.png" alt="Link" class="link-icon">
          <a href="${link.link}" target="_blank" class="link-nama">${link.nama}</a>
          <button class="edit-link" onclick="editLink(${index})">Edit</button>
          <button class="hapus-link" onclick="hapusLink(${index})">Hapus</button>
        </div>
      `;
      linkContainer.appendChild(linkBaru);
    });
  }
    
    document.addEventListener("DOMContentLoaded", function() {
    renderLink();
    });