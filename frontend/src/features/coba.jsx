import React ,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { BASE_URL } from '../Url';
import { getBerita } from './pembeliSlice';
export const Coba = () => {

  const dispatch = useDispatch();
  const berita = useSelector(state => state.berita.berita);
  const isLoading = useSelector(state => state.berita.isLoading);
  const isError = useSelector(state => state.berita.isError);

  const [tampung , setTampung] = useState('')
  const cek = berita ?  berita.filter( item => item.author === tampung)  : 0

  const [penulis , setPenulis] = useState(0)
  const [isi , setIsi] = useState('')

  useEffect(() => {

    dispatch(getBerita());
   

  }, [dispatch],[]);

  useEffect (() => {
    simpan();
    console.log('hasil ;',tampung)
    console.log('hasil1:',cek)
    console.log('penulis:',penulis)
  },[tampung],[cek])

const handel = (a) => {
  setTampung(a)
 
}

const handel2 = () => {
  simpan();
}
// Simpan data

const simpan = () => {

  const x = cek && cek.length > 0 ? cek[0].author : 0;
  const y = cek && cek.length > 0 ? cek[0].content : 0;
  
  // Gunakan setPenulis dan setIsi hanya jika tampung tidak undefined atau null
  if (cek && cek.length > 0) {
      setPenulis(x);
      setIsi(y);
  
    console.log('berhasil',penulis )

}else{
  console.log('gagal')
}
} 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }



  return (
    <div>
            <h1>Data Berita</h1>
            <ul>
            { berita && berita.map((item, index) => (
              <div> 
                    <li key={index}>{item.author}</li>
                    <button onClick={() => {handel(item.author); handel2();}}>tombol</button>
                    </div>
                ))}

                <h1> Hasilnya : {penulis}</h1>
            </ul>
        </div>
  )
}
