const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const kategori = [


  {
    "name": "Animator",
    "description": "Membuat gambar bergerak yang konsisten dan menginspirasi banyak orang",
    "type": "Creator",
    "status": 1,
    "created_at": "2021-02-27 22:58:10",
    "updated_at": "2021-02-27 22:58:10",
    "eng_description": "Create animations that are consistent and inspire a lot of people",
  },
  {
    "name": "Comic Artist",
    "description": "Pembuat karya yang ingin menggugah pembacanya lewat gambar dan cerita yang menarik",
    "type": "Creator",
    "status": 1,
    "created_at": "2021-02-27 22:58:10",
    "updated_at": "2021-02-27 22:58:10",
    "eng_description": "Artists who want to inspire their readers through interesting pictures and stories",
  },
  {
    "name": "Cosplayer",
    "description": "Membuat karakter favoritnya menjadi kenyataan",
    "type": "Creator",
    "status": 1,
    "created_at": "2021-02-27 22:58:10",
    "updated_at": "2021-02-27 22:58:10",
    "eng_description": "Make their favorite characters come true",
  },
  {
    "name": "Graphic Designer",
    "description": "Pembuat desain profesional",
    "type": "Creator",
    "status": 1,
    "created_at": "2021-02-27 22:58:10",
    "updated_at": "2021-02-27 22:58:10",
    "eng_description": "Professional design maker",
  },
  {
    "name": "Illustrator",
    "description": "Penggambar yang cekatan dengan gaya yang unik biasanya mengandalkan komisi sebagai penghasilan utamanya",
    "type": "Creator",
    "status": 1,
    "created_at": "2021-02-27 22:58:10",
    "updated_at": "2021-02-27 22:58:10",
    "eng_description": "Drawing deftly with a unique style usually relies on commission as the main income",
  },
  {
    "name": "Komunitas",
    "description": "Orang-orang yang berkumpul untuk satu tujuan yang sama",
    "type": "Creator",
    "status": 1,
    "created_at": null,
    "updated_at": null,
    "eng_description": "People gathered for the same purpose",
  },
  {
    "name": "Musician",
    "description": "Melantunkan emosi melalui suara",
    "type": "Creator",
    "status": 1,
    "created_at": "2021-02-27 22:58:10",
    "updated_at": "2021-02-27 22:58:10",
    "eng_description": "Chanting emotion through voice",
  },
  {
    "name": "Novelist",
    "description": "Menginspirasi pembacanya melalui tulisan yang unik dan dalam",
    "type": "Creator",
    "status": 1,
    "created_at": "2021-02-27 22:58:10",
    "updated_at": "2021-02-27 22:58:10",
    "eng_description": "Inspire readers through unique and deep writing",
  },
  {
    "name": "Programmer",
    "description": "Pembuat sistem & perangkat lunak",
    "type": "Creator",
    "status": 1,
    "created_at": "-0001-11-30 00:00:00",
    "updated_at": "-0001-11-30 00:00:00",
    "eng_description": "System & software developers",
  },
  {
    "name": "Translator",
    "description": "Penerjemah berbagai konten kreatif",
    "type": "Creator",
    "status": 1,
    "created_at": "2021-02-27 22:58:10",
    "updated_at": "2021-02-27 22:58:10",
    "eng_description": "Translator of various creative content",
  },
  {
    "name": "Virtual Youtuber",
    "description": "Membuat konten-konten video di platform youtube",
    "type": "Creator",
    "status": 1,
    "created_at": "2021-02-27 22:58:10",
    "updated_at": "2021-02-27 22:58:10",
    "eng_description": "Hai doumo, VIRTUAL YOUTUBER ARXIST DESU",
  },
  {
    "name": "Writer",
    "description": "Membuat tulisan-tulisan bermanfaat untuk banyak orang",
    "type": "Creator",
    "status": 1,
    "created_at": "2021-02-27 22:58:10",
    "updated_at": "2021-02-27 22:58:10",
    "eng_description": "Creating useful writings for many people",
  },
  {
    "name": "Youtuber",
    "description": "Membuat konten-konten video di platform youtube",
    "type": "Creator",
    "status": 1,
    "created_at": "2021-02-27 22:58:10",
    "updated_at": "2021-02-27 22:58:10",
    "eng_description": "Chanting emotion through voice",
  }
]



var KategoriKreatorSchema = new Schema({
  description: {
    type: String
  },
  eng_description: {
    type: String
  },
  name: {
    type: String
  },
  status: {
    type: Number
  },
  type: {
    type: String
  },
  categories: {
    type: Schema.Types.ObjectId,
    ref: "sub_kat"
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
const KategoriKreator = mongoose.model("kategori_kreators", KategoriKreatorSchema);


if (!KategoriKreator) {
  kategori.map(data => {
    const KategoriData = new KategoriKreator({
      description: data.description,
      eng_description: data.eng_description,
      name: data.name,
      status: data.status,
      type: data.type,
    })
  })
  KategoriData.save()
}




module.exports = { KategoriKreator }
