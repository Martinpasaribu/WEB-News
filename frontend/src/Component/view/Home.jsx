import React ,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBerita } from '../../features/pembeliSlice';
import { getBerita2 } from '../../features/berita2'
import { getdata } from '../../features/Data'
import { FaUserEdit } from "react-icons/fa";
import { BASE_URL } from '../../Url';
import axios from 'axios'
import correct from '../../assets/output-onlinegiftools (2).gif'
import { CiBookmark } from "react-icons/ci";

export const Home = () => {

const [show, setshow] = useState(false)
const [save, setSave] = useState(false)
const [Data, setData] = useState()
const dispatch = useDispatch();
const berita = useSelector(state => state.berita.berita);
const berita2 = useSelector(state => state.berita2.berita2);
const base = useSelector(state => state.alldata.alldata);
const [loading, setLoading] = useState(true);
const cek = base ?  base.filter( item => item.author === Data)  : 0


const [title, setJudul] = useState("");
const [author, setAuthor] = useState("");
const [gambar, setGambar] = useState("");
const [date, setdate] = useState("");
const [description, setDes] = useState("");
const [url, seturl] = useState("");


const [searchQuery, setSearchQuery] = useState('');
const [showCari, setShowCari] = useState(false)
const [showPopupberhasil, setShowPopupber] = useState(false);

const [searchResults, setSearchResults] = useState([]);
const [searchResultsLoaded, setSearchResultsLoaded] = useState(false);
const [compare, seTCompare] = useState([])
const [datasimpan, setDatasimpan] = useState([])

const [daftar, setDaftar] = useState([])



    
  useEffect(() => {
    dispatch(getBerita());
    dispatch(getBerita2());
    dispatch(getdata());

  }, [dispatch]);


  useEffect (()=>{
    const delay = setTimeout(() => {
        setLoading(false); // Setelah selesai mengambil data, set loading menjadi false
    }, 3000); // Misalnya penundaan 3 detik untuk simulasi

    return () => clearTimeout(delay);
  })


  useEffect (() => {
    simpan();
    simpandata()

    console.log('Data yang disimpan :',datasimpan)
    console.log('Data yang sudah ada :',daftar)
  },[Data],[cek],[daftar],[compare])




    const simpan = () => {

        const x = cek && cek.length > 0 ? cek[0].author : 0;
        const y = cek && cek.length > 0 ? cek[0].content : 0;
        const k = cek && cek.length > 0 ? cek[0].title : 0;
        const l = cek && cek.length > 0 ? cek[0].urlToImage : 0;
        const m = cek && cek.length > 0 ? cek[0].url : 0;
        const n = cek && cek.length > 0 ? cek[0].publishedAt : 0;
        const o = cek && cek.length > 0 ? cek[0].description : 0;
        
        // Gunakan setPenulis dan setIsi hanya jika tampung tidak undefined atau null
        if (cek && cek.length > 0) {
            setAuthor(x);
            setJudul(k);
            setGambar(l);
            seturl(m);
            setdate(n);
            setDes(o);
        
        
      
      }else{
        console.log('gagal')
      }
      } 

  const togleshow = () =>{
    setshow(!show)
  }
  const togleSave = () =>{
    setSave(!save)
  }
  const data = (a) => {
    setData(a)
  }
  const showMessageberhasil = () =>{
    setShowPopupber(!showPopupberhasil);
  }

  const toggleCari = () => {
    setShowCari(!showCari);
  };

  const perbaharui = () => {
    setSearchResultsLoaded(false)
}

    const handleSearch = async () => {
        try {
        if (searchQuery !== null && searchQuery !== undefined && searchQuery !== ''){
        const response = await axios.get(`${BASE_URL}/api/cari`, {
            params: {
            author: searchQuery,
            // content: searchQuery,
            
            }
        });
        setSearchResults(response.data);
    
        setSearchResultsLoaded(true);
        // Update sortedData setelah hasil pencarian diubah
        }
        else {
            setSearchResultsLoaded(true);
        }
        } catch (error) {
        console.error('Error searching products:', error);
        
        }
    };


    // Simpan data

    const simpandata = (datanya) => {
        setDatasimpan(datanya)


    }
    const simpandatabaca = (datanya) => {
        if(cek){

            let sisikan = cek.filter(items => !daftar.some(item => item.title === items.title ))
          
            setDaftar(pref => [...pref, ...sisikan]);

            
        }
        togleshow()
        setTimeout(() => {
            showMessageberhasil()
        }, 500);

    }
    // const simpandatabaca = () => {
    //     if (cek) {
    //         // Filter data cek sehingga hanya data yang belum ada di daftar yang disimpan
    //         let sisikan = cek.filter(item => !daftar.some(existingItem => existingItem.title === item.title));
    
    //         // Menyisipkan data yang telah difilter ke dalam daftar
    //         setDaftar(prevDaftar => [...prevDaftar, ...sisikan]);
            
    //         // Output untuk keperluan debugging
    //         console.log('hasil sisisipkan: ', sisikan);
    //     }
    // }

    
    const firstHalf = berita ? berita.slice(0, 1) : [];
    const secondHalf = berita ? berita.slice(1, 2) : [];
    const a = berita ? berita.slice(2, 6) : '';

    const x = berita2 ? berita2.slice(0, 1) : [];
    const y = berita2 ? berita2.slice(1, 2) : [];
    const z = berita2 ? berita2.slice(2, 6) : '';


  return (
    <div className='overflow-hidden dm:pt-[3rem] w-full dm:m-auto h-full'>

        <div className='flex flex-col space-y-2 dm:space-y-0 w-[23.7rem] h-full mx-auto justify-center items-center dm:w-[66rem] dm:h-full dm:mx-auto dm:font-ConcertOne '>
            <div className='flex justify-between w-full px-5 dm:py-5 py-2'>
            <button onClick={togleSave} className='w-[1rem] h-[1rem] text-pink'><CiBookmark className='dm:size-10 size-7'/> </button>
                <div>
                    <div className="space-x-1  h-6 dm:h-8 text-black font-bold">        
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder=" Penulis "
                            className="text-ijo2 border border-gray-500 pl-2 w-[8rem] dm:w-[12rem] rounded"
                        />
                        <button className="bg-ungu  px-2 py-[2px] rounded text-white" onClick={() => { toggleCari(); handleSearch();  }}>Cari</button>

                        
                    </div>
                </div>
            </div>
            <div className='pb-4'>
                <div className='mx-auto h-[5px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink'></div>

                <div className=' dm:space-y-0 w-[23.7rem] h-full mx-auto justify-center items-center dm:w-[66rem] dm:h-full  dm:font-ConcertOne py-2 dm:text-lg '> 
                All Articles Published
                </div>
            </div>


            {/* Efek skeltone */}
            { loading && 
            <div className=' flex dm:flex-row w-[23.7rem] dm:w-[66rem] h-[23rem] dm:h-[30rem] '>
                
            {/* baian kiri */}
            
            

                <div className='animate-pulse overflow-hidden h-[23rem] dm:h-[29.5rem] dm:w-1/2 w-1/2'>
                { firstHalf && firstHalf.map((item, index) => (
                    <div key={index}  className='h-1/2 dm:h-full p-2 flex flex-col justify-end m-1   shadow rounded-md' >
                            <div className='w-full h-1/2'>
                                <div className='w-full h-full bg-gray-300 rounded-md'></div>
                            </div>
                            <div className='w-full h-1/2 flex flex-col justify-center items-center dm:space-y-10 space-y-3 px-2 dm:px-4'>
                                <div className='w-full h-[1rem] dm:h-[2.5rem] bg-gray-300 rounded-md'></div>
                                <div className='w-full h-[1rem] dm:h-[2.5rem] bg-gray-300 rounded-md'></div>
                            </div>
                    </div>
                    ) )}
                { secondHalf && secondHalf.map((item, index) => (
                    <div key={index}  className='h-1/2 dm:h-full p-2 flex flex-col justify-end m-1   shadow rounded-md' >
                        <div className='w-full h-1/2'>
                            <div className='w-full h-full bg-gray-300 rounded-md'></div>
                        </div>
                        <div className='w-full h-1/2 flex flex-col justify-center items-center dm:space-y-10 space-y-3 px-2 dm:px-4'>
                            <div className='w-full h-[1rem] dm:h-[2.5rem] bg-gray-300 rounded-md'></div>
                            <div className='w-full h-[1rem] dm:h-[2.5rem] bg-gray-300 rounded-md'></div>
                        </div>
                    </div>
                    ) )}
                </div>
    


                {/* baian kanan */}
              
                <div className='overflow-hidden h-[22.5rem] dm:h-[29.5rem] dm:w-2/3 w-1/2 grid grid-cols-1 dm:grid-cols-2 ' >
                { a && a.map((item, index) => (  
                    <div key={index}  className='animate-pulse dm:h-[14.5rem] h-[7rem] p-2 flex flex-col  m-1 shadow rounded-md' >
                            <div className='w-full h-1/2 p-2 dm:p-3'>
                                <div className='w-full h-full bg-gray-300 rounded-md'></div>
                            </div>
                            <div className='w-full h-1/2 flex flex-col justify-center items-center dm:space-y-5 space-y-2 px-6 dm:px-8'>
                                <div className='w-full h-[.8rem] dm:h-[1.5rem] bg-gray-300 rounded-md'></div>
                                <div className='w-full h-[.8rem] dm:h-[1.5rem] bg-gray-300 rounded-md'></div>
                        </div>
                    </div>
                ))}
                </div>
         
            </div>
                }

            {/* Efek asli */}
            { !loading && 
            <div className=' flex dm:flex-row w-[23.7rem] dm:w-[66rem] h-[23rem] dm:h-[30rem] '>
    
            
        {/* baian kiri */}
            
            

                <div className=' overflow-hidden h-[23rem] dm:h-[29.5rem] dm:w-1/2 w-1/2'>
                { firstHalf && firstHalf.map((item, index) => (
                    <div key={index}  className='h-1/2 dm:h-full  flex flex-col justify-end rounded-2xl m-1' style={{backgroundImage: `url(${item.urlToImage})`,  backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}>
                        <div onClick={() => { data(item.author); togleshow();  }} className='bg-black h-[5rem] dm:h-[14rem]  dm:w-full flex flex-col rounded-b-lg dm:rounded-b-2xl bg-opacity-40 '>
                            <div className='w-[] dm:w-[27.8rem] h-[2rem] dm:h-[4rem]   px-2'>
                                <h1 className='text-justify text-[9px] dm:text-[17px] text-white font-bold'>{item.title}</h1>
                            </div>
                            <div className='hidden dm:block w-[] dm:w-[27.8rem] h-[2rem] dm:h-[6rem]   px-2'>
                                <p className='text-justify text-[9px] dm:text-[12px] text-gray-200 '>
                                {item.description}
                                </p>
                            </div>
                            <div className='flex justify-between w-full h-[3rem] dm:h-[3.2rem]  text-[9px] dm:text-[13px] rounded-b-2xl text-gray-300 px-2'>
                                <div className='flex flex-col  gap-1 rounded-b-2xl dm:mt-2 mt-3'>
                                    <p className=''>{item.author}</p>
                                    <p className=''>{item.publishedAt}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center rounded-b-2xl  dm:mt-1 mt-3'>
                                    <FaUserEdit className='size-3 dm:size-5 '/>
                                    <p>{item.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) )}
                { secondHalf && secondHalf.map((item, index) => (
                    <div className='h-[10.3rem] dm:h-full flex dm:hidden flex-col justify-end rounded-2xl m-1' style={{backgroundImage: `url(${item.urlToImage})`,  backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}>
                        <div key={index+1} className='bg-black h-[5.5rem] dm:h-[14rem] dm:w-full flex flex-col rounded-b-lg dm:rounded-b-2xl bg-opacity-40 '>
                            <div className='w-[] dm:w-[27.8rem] h-[2rem] dm:h-[4rem]   px-2'>
                                <h1 className='text-justify text-[9px] dm:text-[17px] text-white font-bold'>{item.title}</h1>
                            </div>
                            <div className='hidden dm:block w-[] dm:w-[27.8rem] h-[2rem] dm:h-[6rem]   px-2'>
                                <p className='text-justify text-[9px] dm:text-[12px] text-gray-200 '>
                                {item.description}
                                </p>
                            </div>
                            <div className='flex justify-between w-full h-[3rem] dm:h-[3.2rem]  text-[9px] dm:text-[13px] rounded-b-2xl text-gray-300 px-2'>
                                <div className='flex flex-col  gap-1 rounded-b-2xl dm:mt-2 mt-3'>
                                    <p className=''>{item.author}</p>
                                    <p className=''>{item.publishedAt}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center rounded-b-2xl  dm:mt-1 mt-3'>
                                    <FaUserEdit className='size-3 dm:size-5 '/>
                                    <p>{item.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) )}
                </div>
    


                {/* baian kaanan */}
              
                <div className='overflow-hidden h-[22.5rem] dm:h-[29.5rem] dm:w-2/3 w-1/2 grid grid-cols-1 dm:grid-cols-2 ' >
                { a && a.map((item, index) => (
                    <div className='dm:h-[14.5rem] h-[7rem] flex flex-col justify-end rounded-2xl m-1' style={{backgroundImage: `url(${item.urlToImage})`,  backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}>
                        <div onClick={() => { data(item.author); togleshow();  }} className='bg-black flex flex-col rounded-b-lg dm:rounded-b-2xl bg-opacity-40'>
                            <div className='w-[] dm:w-[18.4rem] h-[2rem] dm:h-[4rem] px-1 '>
                                <h1 className='text-justify text-[9px] dm:text-[14px] text-white font-bold'>{item.title}</h1>
                            </div>
                            <div className='flex justify-between w-full h-[1.5rem] dm:h-[3.2rem]   px-1 text-[9px] dm:text-[13px] rounded-b-2xl text-gray-300'>
                                <div className='flex flex-col  gap-1 rounded-b-2xl dm:mt-2 mt-3'>
                                    <p className='hidden dm:block'>{item.author}</p>
                                    <p className=''> {item.publishedAt}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center rounded-b-2xl  dm:mt-1 mt-3'>
                                    <FaUserEdit className='size-5 hidden dm:block'/>
                                    {item.author}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}



                </div>
         
            </div>
            }

            <div className='py-4'>
                <div className='mx-auto h-[5px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink'></div>

                <div className=' dm:space-y-0 w-[23.7rem] h-full mx-auto justify-center items-center dm:w-[66rem] dm:h-full  dm:font-ConcertOne py-2 dm:text-lg '> Top Headlines Business</div>
            </div>

            {/* Efek skeltone */}
            {loading && 
            
            <div className=' flex dm:flex-row w-[23.7rem] dm:w-[66rem] h-[23rem] dm:h-[30rem] '>



                {/* baian kiri */}
              
                <div className='overflow-hidden h-[22.5rem] dm:h-[29.5rem] dm:w-2/3 w-1/2 grid grid-cols-1 dm:grid-cols-2 ' >
                { a && a.map((item, index) => (  
                    <div key={index}  className='animate-pulse dm:h-[14.5rem] h-[7rem] p-2 flex flex-col  m-1 shadow rounded-md' >
                            <div className='w-full h-1/2 p-2 dm:p-3'>
                                <div className='w-full h-full bg-gray-300 rounded-md'></div>
                            </div>
                            <div className='w-full h-1/2 flex flex-col justify-center items-center dm:space-y-5 space-y-2 px-6 dm:px-8'>
                                <div className='w-full h-[.8rem] dm:h-[1.5rem] bg-gray-300 rounded-md'></div>
                                <div className='w-full h-[.8rem] dm:h-[1.5rem] bg-gray-300 rounded-md'></div>
                        </div>
                    </div>
                ))}



                </div>
         

                                
                {/* baian Kanan */}

                <div className='animate-pulse overflow-hidden h-[23rem] dm:h-[29.5rem] dm:w-1/2 w-1/2'>
                { firstHalf && firstHalf.map((item, index) => (
                    <div key={index}  className='h-1/2 dm:h-full p-2 flex flex-col justify-end m-1   shadow rounded-md' >
                            <div className='w-full h-1/2'>
                                <div className='w-full h-full bg-gray-300 rounded-md'></div>
                            </div>
                            <div className='w-full h-1/2 flex flex-col justify-center items-center dm:space-y-10 space-y-3 px-2 dm:px-4'>
                                <div className='w-full h-[1rem] dm:h-[2.5rem] bg-gray-300 rounded-md'></div>
                                <div className='w-full h-[1rem] dm:h-[2.5rem] bg-gray-300 rounded-md'></div>
                            </div>
                    </div>
                    ) )}
                { secondHalf && secondHalf.map((item, index) => (
                    <div key={index}  className='h-1/2 dm:h-full p-2 flex flex-col justify-end m-1   shadow rounded-md' >
                        <div className='w-full h-1/2'>
                            <div className='w-full h-full bg-gray-300 rounded-md'></div>
                        </div>
                        <div className='w-full h-1/2 flex flex-col justify-center items-center dm:space-y-10 space-y-3 px-2 dm:px-4'>
                            <div className='w-full h-[1rem] dm:h-[2.5rem] bg-gray-300 rounded-md'></div>
                            <div className='w-full h-[1rem] dm:h-[2.5rem] bg-gray-300 rounded-md'></div>
                        </div>
                    </div>
                    ) )}
                </div>

            </div>
            }

            {/* Efek Asli */}
            { !loading && 
            <div className=' flex dm:flex-row w-[23.7rem] dm:w-[66rem] h-1/2 dm:h-[30rem] '>
            
            <div className='flex dm:flex-row w-[23.7rem] dm:w-[66rem] h-[23rem] dm:h-[30rem] '>
             

            {/* baian kaanan */}
              
                <div className=' overflow-hidden h-[22.5rem] dm:h-[29.5rem] dm:w-2/3 w-1/2 grid grid-cols-1 dm:grid-cols-2 ' >
                    { z && z.map((item, index) => (
                    <div className='dm:h-[14.5rem] h-[7rem] flex flex-col justify-end rounded-2xl m-1' style={{backgroundImage: `url(${item.urlToImage})`,  backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}>
                        <div onClick={() => { data(item.author); togleshow();  }} className='bg-black flex flex-col rounded-b-lg dm:rounded-b-2xl bg-opacity-40'>
                            <div className='w-[] dm:w-[18.4rem] h-[2rem] dm:h-[4rem] px-1 '>
                                <h1 className='text-justify text-[9px] dm:text-[14px] text-white font-bold'>{item.title}</h1>
                            </div>
                            <div className='flex justify-between w-full h-[1.5rem] dm:h-[3.2rem]   px-1 text-[9px] dm:text-[13px] rounded-b-2xl text-gray-300'>
                                <div className='flex flex-col  gap-1 rounded-b-2xl dm:mt-2 mt-3'>
                                    <p className='hidden dm:block'>{item.author}</p>
                                    <p className=''>{item.publishedAt}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center rounded-b-2xl  dm:mt-1 mt-3'>
                                    <FaUserEdit className='size-5 hidden dm:block'/>
                                    {item.author}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}

                </div>   



        {/* baian kiri */}            
            
                <div className='overflow-hidden h-[23rem] dm:h-[29.5rem] dm:w-1/2 w-1/2'>
                { x && x.map((item, index) => (
                    <div onClick={() => { data(item.author); togleshow();  }} className='h-1/2 dm:h-full  flex flex-col justify-end rounded-2xl m-1' style={{backgroundImage: `url(${item.urlToImage})`,  backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}>
                        <div className='bg-black h-[5rem] dm:h-[14rem] dm:w-full flex flex-col rounded-b-lg dm:rounded-b-2xl bg-opacity-40 '>
                            <div className='w-[] dm:w-[27.8rem] h-[2rem] dm:h-[4rem]   px-2'>
                                <h1 className='text-justify text-[9px] dm:text-[17px] text-white font-bold'>{item.title}</h1>
                            </div>
                            <div className='hidden dm:block w-[] dm:w-[27.8rem] h-[2rem] dm:h-[6rem]   px-2'>
                                <p className='text-justify text-[9px] dm:text-[12px] text-gray-200 '>
                                {item.description}
                                </p>
                            </div>
                            <div className='flex justify-between w-full h-[3rem] dm:h-[3.2rem]  text-[9px] dm:text-[13px] rounded-b-2xl text-gray-300 px-2'>
                                <div className='flex flex-col  gap-1 rounded-b-2xl dm:mt-2 mt-3'>
                                    <p className=''>{item.author}</p>
                                    <p className=''>{item.publishedAt}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center rounded-b-2xl  dm:mt-1 mt-3'>
                                    <FaUserEdit className='size-3 dm:size-5 '/>
                                    <p>{item.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) )}
                { y && y.map((item, index) => (
                    <div className='h-[10.3rem] dm:h-full flex dm:hidden flex-col justify-end rounded-2xl m-1' style={{backgroundImage: `url(${item.urlToImage})`,  backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}>
                        <div onClick={() => { data(item.author); togleshow();  }} className='bg-black h-[5rem] dm:h-[14rem] dm:w-full flex flex-col rounded-b-lg dm:rounded-b-2xl bg-opacity-40 '>
                            <div className='w-[] dm:w-[27.8rem] h-[2rem] dm:h-[4rem]   px-2'>
                                <h1 className='text-justify text-[9px] dm:text-[17px] text-white font-bold'>{item.title}</h1>
                            </div>
                            <div className='hidden dm:block w-[] dm:w-[27.8rem] h-[2rem] dm:h-[6rem]   px-2'>
                                <p className='text-justify text-[9px] dm:text-[12px] text-gray-200 '>
                                {item.description}
                                </p>
                            </div>
                            <div className='flex justify-between w-full h-[3rem] dm:h-[3.2rem]  text-[9px] dm:text-[13px] rounded-b-2xl text-gray-300 px-2'>
                                <div className='flex flex-col  gap-1 rounded-b-2xl dm:mt-2 mt-3'>
                                    <p className=''>{item.author}</p>
                                    <p className=''>{item.publishedAt}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center rounded-b-2xl  dm:mt-1 mt-3'>
                                    <FaUserEdit className='size-3 dm:size-5 '/>
                                    <p>{item.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) )}
                </div>
    

         
            </div>

            </div>
        }

            
        </div>

        {save && (
            <>
            <div className="bg-black opacity-50 fixed top-0 left-0 w-full h-full"></div>  
      
                <div className=' fixed dm:top-[7rem] top-[10rem] left-[1rem]  w-[22rem] h-[25rem] dm:left-[8rem] dm:w-[40rem] dm:h-[38rem] bg-ungu rounded-xl'>
                <div className=' text-black font-bold text-center  fixed top-[10.3rem] dm:top-[6.5rem] left-[1.4rem] dm:left-[8rem]  md:m-4 dm:ml-5 border-full'> <button onClick={togleSave}  className='bg-red text-white hover:text-white w-[1.7rem] dm:w-[1.9rem] rounded-full'>X</button></div>  

                
                    <div key={''}  className='h-[24rem] mt-3 dm:mt-1 dm:h-[35rem] flex flex-col rounded-2xl m-1' >
                        
                          <div className='overflow-auto'>
                          <h1 className='mx-auto text-center dm:m-2 m-1 text-white font-bold'>SAVE </h1>
                            <div className='grid grid-cols-2  gap-2'>
                            { daftar && daftar.map((item, index)=> (
                                <div key={index} className='  w-[10rem] h-[10rem] dm:w-[18rem] dm:h-[18rem]  rounded-lg'>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <div className='flex justify-center items-end w-[10rem] h-[10rem] dm:w-[18rem] dm:h-[15rem] rounded-lg' style={{backgroundImage: `url(${item.urlToImage})`,  backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}>
                                        <h1 className='w-[10rem] h-[4rem] dm:w-[18rem] dm:h-[5rem] text-white text-[10px] dm:text-[14px] bg-black bg-opacity-50 text-center  rounded-lg'>
                                         {item.title}
                                        </h1>
                                    </div>
                                    </a>
                                </div>
                                ) )} 
                            </div>
                        </div>

                     
                    </div>
                 
                </div>
   
                
            </>

        )}

        {showPopupberhasil && (
            <>
            <div className="bg-black opacity-50 fixed top-0 left-0 w-full h-full"></div> 
            <div className='flex justify-center items-center fixed dm:top-[7rem] top-[10rem] left-[1rem]  w-[20rem] h-[18rem] dm:left-[8rem] dm:w-[40rem] dm:h-[35rem]  rounded-xl'>
                 
                    <div onClick={showMessageberhasil} className=' fixed flex flex-col justify-center items-center rounded  w-[12rem] md:w-[23rem] bg-white h-[12rem] md:h-[20rem]'> 
                        <div className='md:w-[20rem] w-[8rem]'>
                            <img src={correct} alt="" className=' ' />
                        </div>
                        <div>
                            <h1 className='md:text-xl text-xs text-center'>Disimpan </h1>
                        </div>
                    </div>
            </div>
            </>

        )}

        {show && (
            <>
            <div className="bg-black opacity-50 fixed top-0 left-0 w-full h-full"></div>  
      
                <div className=' fixed dm:top-[7rem] top-[10rem] left-[1rem]  w-[20rem] h-[18rem] dm:left-[8rem] dm:w-[40rem] dm:h-[35rem] bg-ungu rounded-xl'>
                <div className=' text-black font-bold text-center  fixed top-[10.2rem] dm:top-[8rem] left-[1.4rem] dm:left-[8rem]  md:m-4 dm:ml-5 border-full'> <button onClick={togleshow}  className='bg-red text-white hover:text-white w-[1.7rem] dm:w-[1.9rem] rounded-full'>X</button></div>  

                
                    <div key={''}  className='h-[13rem] mt-3 dm:mt-1 dm:h-[30rem] flex flex-col justify-end rounded-2xl m-1' style={{backgroundImage: `url(${gambar})`,  backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}>
                        <div onClick={''} className='bg-black h-[8rem] dm:h-[14rem]  dm:w-full flex flex-col rounded-b-lg dm:rounded-b-2xl bg-opacity-40 '>
                            <div className='w-[] dm:w-[27.8rem] h-[2rem] dm:h-[4rem]   px-2'>
                                <h1 className='text-justify text-[9px] dm:text-[17px] text-white font-bold'>{title}</h1>
                            </div>
                            <div className='w-[] dm:w-[27.8rem] h-[2rem] dm:h-[6rem]   px-2'>
                                <p className='text-justify text-[9px] dm:text-[12px] text-gray-200 '>
                                {description}
                                </p>
                            </div>
                            <div className='flex justify-between w-full h-[3rem] dm:h-[3.2rem]  text-[9px] dm:text-[13px] rounded-b-2xl text-gray-300 px-2'>
                                <div className='flex flex-col  gap-1 rounded-b-2xl dm:mt-2 mt-3'>
                                    <p className=''>{author}</p>
                                    <p className=''>{date}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center rounded-b-2xl  dm:mt-1 mt-3'>
                                    <FaUserEdit className='size-3 dm:size-5 '/>
                                    <p>{author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    
                    <div className='flex  justify-around items-center w-full mt-5 text-white'>
                        <button onClick={() => simpandatabaca(cek)}  className='dm:w-[7rem] dm:h-[2rem] w-[5rem] h-[2rem] rounded-md bg-hijau'>Simpan</button>
                        <button className='dm:w-[7rem] dm:h-[2rem] w-[5rem] h-[2rem] rounded-md bg-biru text-center'><a href={url} target="_blank" rel="noopener noreferrer">Baca</a></button>
                    </div>
                 
                </div>
   
                
            </>

        )}

        {showCari && 
            (
              
              <>
              <div className="bg-black opacity-50 fixed top-0 left-0 w-full h-full"></div>    

              <div className="">

                  <div className="  overflow-auto fixed dm:top-[7rem] top-[10rem] left-[1rem]  w-[20rem] h-[17rem] dm:left-[8rem] dm:w-[40rem] dm:h-[35rem] bg-ungu rounded-xl" >
                  <div className=' text-black font-bold text-center  fixed top-[10.3rem] dm:top-[8rem] left-[1.4rem] dm:left-[8rem]  md:m-4 dm:ml-5 border-full'> <button onClick={toggleCari}  className='bg-red text-white hover:text-white w-[1.7rem] dm:w-[1.9rem] rounded-full'>X</button></div>  

                  {searchResultsLoaded ? (
                    <div>
                  {searchResults.length > 0 ? (
                    <div> 
                  {searchResults.map((item) => (
                    <div key={''}  className='h-[13rem] dm:h-[30rem] flex flex-col justify-end rounded-2xl m-1' style={{backgroundImage: `url(${item.urlToImage})`,  backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}>
                    <div onClick={() => { data(berita[0].author); togleshow();  }} className='bg-black h-[8rem] dm:h-[14rem]  dm:w-full flex flex-col rounded-b-lg dm:rounded-b-2xl bg-opacity-40 '>
                        <div className='w-[] dm:w-[27.8rem] h-[2rem] dm:h-[4rem]   px-2'>
                            <h1 className='text-justify text-[9px] dm:text-[17px] text-white font-bold'>{item.title}</h1>
                        </div>
                        <div className='w-[] dm:w-[27.8rem] h-[2rem] dm:h-[6rem]   px-2'>
                            <p className='text-justify text-[9px] dm:text-[12px] text-gray-200 '>
                            {item.description}
                            </p>
                        </div>
                        <div className='flex justify-between w-full h-[3rem] dm:h-[3.2rem]  text-[9px] dm:text-[13px] rounded-b-2xl text-gray-300 px-2'>
                            <div className='flex flex-col  gap-1 rounded-b-2xl dm:mt-2 mt-3'>
                                <p className=''>{item.author}</p>
                                <p className=''>{item.date}</p>
                            </div>
                            <div className='flex flex-col justify-center items-center rounded-b-2xl  dm:mt-1 mt-3'>
                                <FaUserEdit className='size-3 dm:size-5 '/>
                                <p>{item.author}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                  
                  ))}
                  <div className='flex  justify-around items-center w-full mt-5 text-white'>
                  <button onClick={() => simpandatabaca(cek)}  className='dm:w-[7rem] dm:h-[2rem] w-[5rem] h-[2rem] rounded-md bg-hijau'>Simpan</button>
                  <button className='dm:w-[7rem] dm:h-[2rem] w-[5rem] h-[2rem] rounded-md bg-biru text-center'><a href={url} target="_blank" rel="noopener noreferrer">Baca</a></button>
              </div>
                  </div>
                  ): ( 
          
                        <div>
                        <div className='mx-auto text-center mt-10' >
                        <p classname=''> Data yang anda cari tidak ada</p>
                        </div>     
                        </div>
                     
                  )}
                  </div>
                  ) : (
                    <div className='mx-auto text-center mt-10'>
                      <p className='text-center'>Loading...</p>
                    </div>
                  )}

                </div>
                </div>
              </>
            )
          }
    </div>
    
  )
}
