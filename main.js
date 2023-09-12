//1
// let strings = ["uriel","michael","daniel","avraham","beni"]
// strings.sort();
// console.log(strings);

//2
// let nums = [25, 36, 2, 45, 32, 10, 5, 26, 98];
// nums.sort((a, b) => a - b);
// console.log(nums);

//3
// let nums = [25, 36, 2, 45, 32, 10, 5, 26, 98];
// nums.sort((a, b) => b - a);
// console.log(nums);

//4
// document.body.innerHTML += `<input id="myInput" type="text"></input>`;
// let names = [];
// let count = 0;
// var objectInput = document.querySelector("#myInput");
// document
//   .querySelector("#myInput")
//   .addEventListener("keydown", function (event) {
//     if (event.keyCode == 13) {
//       if (count < 10) {
//         let valueInput = objectInput.value;

//         names.push(valueInput);
//         objectInput.value = "";
//         count++;
//       } else {
//         names.sort();
//         console.log(names);
//       }
//     }
//   });

//5
// function rndAgaesArr() {
//   let ages = [];
//   for (let i = 0; i < 10; i++) {
//     ages.push(Math.floor(Math.random() * 10));
//   }
//   console.log(ages);
//   ages.sort((a, b) => b - a);
//   console.log(ages);
// }

//6
// let strings = ["uriel", "michael", "daniel", "avraham", "beni"];
// let newArr = strings.join(" - ");
// console.log(newArr);

//7 1
// let hiTechCompanies = [
//   "CheckPoint",
//   "Mobileye",
//   "Waze",
//   "Mellanox",
//   "IronSource",
//   "CyberArk",
//   "Taboola",
//   "SimilarWeb",
//   "OrCam",
//   "Vayyar",
// ];

// for (let i = 0; i < hiTechCompanies.length; i++) {
//   document.body.innerHTML += `<p>${hiTechCompanies[i]}</p>`;
// }

//7 2
// let images = [
//   "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/16730076/image/2d23b7d60e0a056aa08892391c077909?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20230907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230907T200619Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=261c7256479de544d59fe9ce4262f063fe4ff4e15e72016e5c7fd2dee23d9056",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJb-LiUa0qlaBZZT7IEy8nt2zo_VO-R1zXCHdwxCV-1-WycvTUoqoZIWTH2wZld1KNA&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28UNAr1dXkREemsKm1N1B2-BeEf_cklASfFyLDH1R-pcT-ApBNEk4uNmdPwp3x3jxltw&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBPN9-MWi-DqruhydQLYUtMMQ7T81ThBkg6Idawg299iYprpopUiZ8t0hUcPLtvNmXtc&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeb7PaHnYBffrB9kVk70BljEjAPuCmIOr7yC9BdGs8ipJXoeO_kdkCLLnXFerg_M9xRoY&usqp=CAU",
//   "https://chabadpedia.co.il/images/thumb/a/a8/%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg/250px-%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRBPEu4u7A6R9jllkN9it-inTJBRswjYtNYisdkoNSs8-KUYy2NYwp9OFraLDTDxlDes&usqp=CAU",
//   "https://1.bp.blogspot.com/-5hjh-1BggDI/XiNNnf1RSbI/AAAAAAAAAVw/zPt4QsTek7cysRBt9luWL0IBkDvvTejwgCLcBGAsYHQ/s640/5747-08-18%2B%2528184%2529.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcGQkuYiI_sdjTKy0K_cauYB4vr_r0-Wd62fFAcpvFwUFdFnk8Xg8BkjYxg47UlSQs48&usqp=CAU",
//   "https://my-rabbi.co.il/wp-content/uploads/2019/07/145002-DSL.jpg",
//   "https://www.tamarzeitlin.com/wp-content/uploads/2022/04/WEB-%D7%94%D7%A8%D7%91%D7%99-%D7%9E%D7%97%D7%91%D7%93-scaled.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzc1hQ7rto2gRT2JBz04A9_rKNDAjQ5MRcUdFqS5qg5Kky0c4HZZdeo4NVzqLHYJp-bT0&usqp=CAU",
// ];
// let index = 0;
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 3; j++) {
//     document.body.innerHTML += `<img src=${images[index++]}>`;
//   }
//   document.body.innerHTML += `<br>`;
// }
// var collectingImg = document.getElementsByTagName("img");

// for (let k = 0; k < collectingImg.length; k++) {
//   collectingImg[k].style.width = "200px";
//   collectingImg[k].style.height = "200px";
// }

// 7 3
let objectArray = [
  {
    companyNAme: "Check Point Software",
    city: "Tel Aviv",
    pictureId:
      "data:image/jpeg;base64,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",
    id: 1,
    link: "https://www.checkpoint.com/",
  },
  {
    companyNAme: "Mobileye",
    city: "jeruslem",
    pictureId:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAXCAMAAAAGEyDiAAAAdVBMVEX///8fLrgAALATJrcAAK25vOTO0OwXKLfq6/dobsj6+v0dLLj4+P0ADrMAHbUOIrbw8Png4fJMVsKTl9ejpty+weZUXMQAF7SDiNGanthtdMtja8iuseAvO7uNktXJy+rY2vA3Qr14fs5FT8AnNbo/SL5cZMaeZKClAAACnklEQVRIie2VWZObMAyAjTBHAIMJZ8J9JP//J64kTJLtbDuks9N9qR4S+ZA+yZKNEP/ln0hQnk6nJmf1ejIyX9Jj1n3zeTyU41Eu2LZd1aTdYnuXGJrgiPU9furt7AsH3MNcy7IS5AaTbb1Icjti3dhPfZbjX3Cj7hPWsqr8Ta72g7e4nufFdRQmhofDkP7DdduQFsLNskEIP+9zvc0NWd9qw43aLE+3jQ+ue+lzHy2KrU2CYsTfAo2oeO5QDAFWtUTJmnJRjA3vZVkxGCI2ymCWnYK6kFUHihz4k+wWADqPZi0AJoAZ9V7qjRud5XoGuIgIzuyila5IQ3lDI4w/HS+ZiV/3FA+BQ4+GnLHagr1UE+66VuhHpAkdQmIjPZihpXzpV1wInIHh3jjpGRzRA/uYJqFV51NEOBFEkelZX9W8jLSQC5YlL1z2otVEgxztehh5YVHIVS3rM/gPrgMFz02W0ECOXYygxg0okbo+S5zGMXNLb+fm8SuXD6VigwL9dqbTHTy0Rm36iGnv3KvySXSPqCtgaqdEiHXRPHl/NmJahck73Pi0sxzRdObEIHtwS1uygEw5Hk0VqhIzCTt2VKH1FrebXvKtvso3whJiEakvb93mYF1E9JhkgdB6j1ub+pZ4hg3m/Gt9W1NfbQxsanZTX+Hv2Md7dZgbgZWyJ+rnhMEZ9c+jn1dFnZh6bOGt3NM+UD+jfXuUm0nmAn8BHEkXMISJ7ye+z2Er6f6SPd9fWtcTdE0n73xbclVulahgaWxZH86XniGKlB8iv+AgnHrO+cTcQei2b/19o1kv6jkb98oPBtTOxshw+Z1kbuJ5dsLcCifh4Lfwz9KEX88H0/l8XjJSrwuppLWk3b6Dm8ojn5fvF344fkB+hvp7+QDdEjFJIBin4gAAAABJRU5ErkJggg==",
    id: 2,
    link: "https://www.mobileye.com/he-il/",
  },
  {
    companyNAme: "Waze",
    city: "Tel Aviv",
    pictureId:
      "https://files.geektime.co.il/wp-content/uploads/2017/09/LOGO.jpg",
    id: 3,
    link: "https://www.waze.com/he/live-map",
  },
  {
    companyNAme: "Mellanox ",
    city: "Yokneam",
    pictureId:
      "https://mms.businesswire.com/media/20200303005120/en/700285/23/mellanox-logo-horizontal-blue.jpg",

    id: 4,
    link: "https://www.linkedin.com/company/mellanox-technologies/?originalSubdomain=il",
  },
  {
    companyNAme: "IronSource",
    city: "Tel Aviv",
    pictureId:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA5CAMAAAA7tUSkAAAAflBMVEX///8NFIwAAIcAAIMAAIAKEowAAH37+/3w8Pb4+Pvz8/jCwtoABopsbazp6fIACop8fbNJSp3NzeF1drCkpcnR0uSPkL6bnMRwca3g4e2DhLgsL5JTVaHX2OgiJZCur8+5udVaW6RmZ6lNT54YHI89P5g2OJYAAGhfYKVCRZvbOFRKAAAC30lEQVRYhe1W25aiMBAM3U24SSKoiQG5KOji///gdtDd2dkzzsvM8rLU8XAMJKmkuroTIVasWLFixYoV/zOizOT50ZbLsqodwQwEGy1HuwcIngghOCxFu8MweIPGbhnaCoN3CClbgjajINggIkuMgMiKhxj/e9qo1cHmXJYZgHFxXJ6YGPJ/z9uzyrATIpHPHLowMSn/z+T24zGJvUzHLwaj0Mx7Ua4puKE4iZRfyEx4k6cPh6ScbwS0/QptCuxlXVhrDLfaIz98vAf/zTknkkTEiRCxSvkFN1I1p12nhoB4kUnsrRBFjwf/uAu/TOa5409s0ngzAy899ZSqGoozC6BbP9OgjxmMVlpxQcl9DtAapDqxAJfMRTy51RLPaToGvajGyQVjz91M4DuLrJZ0Uq94y5mX45tKvyORGJqrh28UkGcYEnYnuHYBVg1qKNh+qa9sVGfCEuwLuKWAvdjB4EijrAxqo2XlCMwR2s94w5Yt5Wh8GGsPf/ICh1oRMgcEJWApWt5LYq4IWjY1VCwYZiH0YgtDgz4RJOxFue8quDbZBl+5r3naWRRjPZ7mSjWvJPrFS6k4IDaig7AHdOIKVZmVImWxTT0vCrpg5j053y+V3BBzWmhdt/sXvN5X+s5hyJjT/dg/eB++KoDjy+6J/BZYM96a5zUTkWkMQF/AJHqgBiA/1J6XGh7OgnAJtHBjNbOX1rr7PGJPxT4tvA3e8uiKeU+S7bMnDJHKA0knatyq+eDCm2gIW6SKFwhSs85SNr7+8TfqogBhI4PkFW8HDz8n8um9/Hfd6GzvrPGKl7th2whnTCys6Vnk833yMXHb+8Sqqvxqs8qqqvLjDpfrmcOamnvxyaEajb5O9j3Hr1MiKs9+HdPL7t+H+Vxg5djERDSfC7TAuSDYiX+dg5yNiyDH97SvvP/t4Lrzds/BBe92Kvf3uo1PD7PgvY6R9tV5mMwiN5wVK1asWLFixXL4CRwhKh0jjbwEAAAAAElFTkSuQmCC",
    id: 5,
    link: "https://www.is.com/",
  },
  {
    companyNAme: "CyberArk",
    city: "USA",
    pictureId:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAE0AdwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECAwUHBAj/xAAwEAABBAIBAwEHBAIDAQAAAAABAAIDBAURIQYSMUETFCIyYXGBByNRoUJyUnORFf/EABgBAQADAQAAAAAAAAAAAAAAAAACAwQF/8QAIBEBAAICAgIDAQAAAAAAAAAAAAECAxIEETFREyEjcf/aAAwDAQACEQMRAD8A7iiIgIiICIiAiKm0FUREBERAREQEREBERAREQFjsTR14XyzSMjjYNue92gB9SsiiH6qkjou0QSCJYSCP+xqnjrveK+0L21rNvTxZ7r5jO6DCsEj/AB7zIPhH+rfX7nQ+659c6izFTKMvwZGcWXN+NznbDxvwW+Nfjj00tZXvSuBa8Bzh4ctxiK0F+rYZbYJNPGj/AJN49D6Loz8PGtpNe3PiM3IrvE9Jv0x+plK92V821lGyeBKCfYvP3Pyfnj6qfxva9oexwc0jYIOwQucdG9A4l8TcjkC+5t7hHDIAGN0SPiA+Y/19F0aJjGMDYgGsaNAN8AfwFi5Hxbfl4bMHy6/p5XoiKheIiICIiAiIgIiICiH6qAu6LttAJJlhAA9f3GqXqyaKOeJ0c0bZI3jTmuGwR/BCnjvpeLekL12rNfb59wVKpHcjkzLZzVPzx13AO/J/j7aP1XU7WU6Mo9Px/HVFTn2cMTT7Uu9dN+YO8bJ/JXnz/QMcvdPhXiF/n3d5+A/6nyP7H2XPrnTWat5SOhBjp/btb8fcO1rBvyXeNfnnR1tdCYw8m2826c+s5uNXSI7Zcn1tflp//OxLpaVEOcQe4e2eCSficPHnw3/0rrHQh30fhzve6cfP88KPdM/ppQodljMFt+z59nr9ln4Pzfnj6KesaGgNaAABoAeio5OTDNYpij6ho42PLEzfJPlciIsbWIiICIiAiIgLT5HqfD42y+tbtkSxsD5RHC+QQtPh0haCGDg8u14W4UVDMxhcjlfc8QMjHfse8Qysssj7XFjWlsvdzodg05odwda45DcTZ7FwRXpZbbWtoODLO2u2wkAtGtbO+4a1ve+F57fVWGp2Z4LNqSN1ctE7jXkLIdtDh3v7e1vDgeTxteTKYBt/qjE5J1fbIWv941JprnN0Ye5v+fa4vI44J2o71B05l7WS6j93p3XsyL2GvJFkGxQcQRs/djJ+IdzTsFp2OOdoJfd6mxNO3JUnmmM8YaXtiqyy9vcNjZY0jkK271RhqNmevasvjdXLRO73eQxxbAI7nhva3gg8nja0F/G5eLO37MNG/NFYZD2vpX2V27azR20kHyseb6bzN2XPvr3Jo612aPuoMdCG3IfYsZI0vLS5jjpzQdgcem9oJZk81jsUa7chaZAbL/Zw9wJ7nfj7jk8LDmOpMRhJI48pcFd8rS5gLHO2B9gVEuoulsx1DlrL+yrVoxVRWqMnHedEAuc3tPwu2ANnfACpbwXU2Tlwtl7zRvVqMsU1hsjHak8NOudh2hvXja0Vx4+o7t/VFsmT76hLz1JhwynJ7/F2XWvdXfz2vDBtx34Gh53pX4/NV8m2vNj2Sz1Zg4iyGFrB26/5aPPpoehUAvdE5G/g8Bjoq3uZrNsi0587X9r3gEO4PIc4HgeAVPemjdOIgjydGKnZiaI3RQuBj0BoFuvA+np/ajkpSK91ntKl7zbq0NqiIqVoiIgIiICIiAiIgKmlVEFNJpVRBTSBVRAREQEREH//2Q==",
    id: 6,
    link: "https://www.cyberark.com/",
  },
  {
    companyNAme: "Taboola",
    city: "New York",
    pictureId:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8UTIAAQ3sARXwAP3kAO3cJSH4AOXYAQXqKn7cAPngAN3UPSn/09vhHa5Q6ZJByjKp/lbHb4enk6vCzwNC8xdOWqL5SdJqfr8Pr8PSuvc44Yo4eUoSmtcjEztqQobhphaVMb5fR2eMnV4dbep56kK1gf6HK096CmbQAMXFgGWIYAAAEW0lEQVR4nO3Y23aiMBQGYCTkAEFEEAQ5eKAqff8XnGRHrNauWXMxUzpr/d9FC5hQfhN2oJ4HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf1sZfuGpxWakY8uXrqdNWZZFdt/Pi6osu75+OPG4+6cX/0ca5b96anHm5oiKPiXMU8UD80HA2ZkydY2OlG2oV5v7ifnhe1L8ThIvXj21WPvmSMyeE1aa3Vsz3Xn1EN1PJHhiGq/sPku/M8vX/jDhQjwlrLQ9FqtI2e6xrFpBWYOAgrPhByVseGDdoim7HamnFi7hU+rcBWy7vlvQN+TTzyAtioOi85x/TsK+sDbKBazMdt9XfVXu9/vKVZF7wnpTdQXdc2saKW63c/UxW9f2s4P9LA6eEp525T4NzQnzuWJ6S0nXyG2kTWMmny0TKpBxOSVs6zcdKFNHtqYNDZx4o65HMSWk3t4pou1TMiVcriNuzseYKUt6KOZPeJF0+T6jO4xfpoTtrbQIffXeaWaO1DW9lxxJ45tzmrDFlHApaAqbfDSzTVWaOWFBt1iw3Y8DDY7ORzdLYz+gsmJnIIVgZ+p6+JQwcwn7KeFBxYZYV6Pr7f/2Qr4hYWpzMRoed2sWt4RqX3StKyslzcx4RV2HezGOeru/oxtT5lPCwVInb5q/up454YeTsNeoNiEljK62GXM1dEe1N7IPLCVtuuFZmRVlSYnj4YtaWtKJ+DzV5inh8tqFaSLcEn5LGDfUbmRuOrrBDJrLQCMWx27NVG9b10sXjwmzYn/eDpGbC/MnLI7cPH0xEbPHhOxA7dzg8TyTdJPGNMymitQpd/uusOrwYcUPWxnY8wn2MxKm2l6kiGSbtg+zVFyoXaduJaVOpPsGTOmQWzM7q0C5uAsR+Hb6Tglbqk8+9xM3AeZOeKVSKhL7hvCYMG6p3YWWc2k3T+c24pxH7frkTlEdA3MgUlv3PuESrkP6Tvwxm9aRmRPm4Uc1qANX9l0tVWbt965umTDjuauoSZ4/Pa66/byqvCnhSL8W9P1MU/z743kPCV29Y+nSyxLxmHChmvToHl+1GbRS8ybsXwt/tktbLu3j2y3hls7il3W9ccvp3LM00652SM1vlea2HppVm7kywu1iWSpzA0Y6Tg5jtzOPsn2x6cZLw3lgurHwnnC9o2Ff+FIG81aad2HpzL740YImotVgDwVlqMwvth3cUApJC4Aba7PLmHlYtZRit9rjEjbMdFPmmeZ2QiYv09+YJWGTWI3561m60FJHx84b6djbfmV+rkLvrCTn+kgPLl74zu7PMp+xdzvKl8R18/rDQmvdpifvSIfKWRJ+snz9p4xVZx/fvyml3Bcv6YTi8eH6Xdf5r2XVVnOzmDOafebtKODyWJ7mvqy/LNuU68vWOoxzvuACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAf+0XiUtAlP8LsxsAAAAASUVORK5CYII=",
    id: 7,
    link: "https://www.taboola.com/",
  },
  {
    companyNAme: "SimilarWeb",
    city: "givatahim",
    pictureId:
      "data:image/png;base64,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",
    id: 8,
    link: "https://www.similarweb.com/",
  },
  {
    companyNAme: "OrCam Technologies",
    city: "Tel Aviv",
    pictureId:
      "https://dp9eps5gd5xd0.cloudfront.net/images/suppliers/ImageForSupplier_1482.jpg",
    id: 9,
    link: "https://www.orcam.com/he-il/?cq_src=google_ads&cq_cmp=19605525280&cq_term=orcam%20technologies&cq_plac=&cq_net=g&cq_plt=gp&utm_source=google&utm_medium=cpc&utm_campaign=OrCam_GeneralOrCam_GA_IL_General_Branded&utm_term=orcam%20technologies&hsa_acc=5047145566&hsa_cam=19605525280&hsa_grp=146609704938&hsa_ad=670624689497&hsa_src=g&hsa_tgt=kwd-374872997477&hsa_kw=orcam%20technologies&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwmICoBhDxARIsABXkXlLTXYDtRY5dMtjdbOKguriBtfh-wKEwXdW2QnH84iXeBH8jwc1Bn1gaAodtEALw_wcB",
  },
  {
    companyNAme: "Vayyar Imaging",
    city: "Yahud",
    pictureId:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAAAYFBMVEX///8Are4ps+8Aq+4Ap+0Aqe0Apu37/v/s9/2p2/eL0PXo9v0Aru72/P5bwPI1tvCX1PZwxvN+y/TO6vq/5Pnb8PxLu/G04PjJ6PrS7Ptyx/Oj2ffg8vy94/mw3vhkwvIgoyCHAAAE20lEQVR4nO2d61bqMBBGJ5RQAQFFBJTb+7/lIR7x0gzpBGmTfGv2Tywstm3DZDKZEimKoiiKoiiKoiiKoiiKoiiKoqRhmvoLdEW9NKm/QkeMrR2k/g6d8DKwxiCqPcxHxkCqTUaVgVTbVP/F4NReF9YYRLXZaWQMpNrTsDKQaitjjUFU26+HxiCq1e+jphiI2s5WvhmC2vbRMmIAalP/JgNRW464axFA7VhdFStb7W3A32TFqz2cmAEfQq0RVeGobZpRFYraz6kLlNrsueUmK1ZtZyWnrEC11ZWoqng1ZuqCoVYHoqqy1cbs1AVA7SUcVZWr9pkQBlSbRN1kBak9tIaLxarRM65ajatGh4hf6sLUaA06jJyZxo/9pajRJP605apWN19AUduaTfOlXWyclaXadD6s5t6rjwBqH1HVcNZ8+Vh8ePyZELZH7y+xpy0zta+EMHNFxp62rNR+JoSH3hhJBZ+1Xwlhe/D+HjlI5qN2+J0Qrp69I+oy1V4XzQi48g9aRrnloTZjltmHr95h+6hIMgs1dpm9evIPXBemdi0hvPYP3cRckcnVri+zj5ijC1ILJYTti3/8e8QEIK3aOLTMzt1s24jTllKtLSHM3Gwx07Z0au0JYcu8ayl3S6YmSAgzv2wxV2QitU3oJrvATGxixsgkarJldlMtmffOxVdkAjXpMrsxC+bd44wXfNtrWb4YMm/fixPJfatFLLOf1fbMJ4jf3a9a1DL7eRxZMZ9xkp70PtW4qUsQLh6Rz7V7VOMrhINq/kz7PLxmp3atQjgIN0SS9JruSe361CUIk0QgGmSlFlfL8s3IyyGTfGLTh1qwQjiI5Ub/XTZqLRXCYbUt84GrTCrrWiuEw2pcgCyNRzpWm9xW8nGB/WGTDpGdqh0EFcJBLBf7S5dsOlTzE8LRsL/Z0mxkZ2ryqUsILj0ijSK7UnuSVgiHYcMRYeq/G7WoqUuIR/bflu6s3RhVcbCRlnCifX+1yArhMFy+jg6J1GIrhMNwKQRpOHJntfgK4RY1f0VbnIu8q9otFcI3qL31r/bHqIpV42Y1vavNzL1PWTZqN9Z1l6EGfK8R8AjpgP1dI+RohKLT3yHyiiEdsJG/Q7yjM0x+8zVCnmUTcG7E8eeMFruanUFGyxGxusuqZZuHJOTsMXWQ85dWxehKzR+BXV8j5FVRAl7LdsBWIBBy3QjFV/v4m08yrfZxwNZoOSJiL64cPt/KOmp2TA1RWj0kAVexOmBrjx2CBYIyK8bp1jr/iJ0nujujI2D31FDLTihmHlrOTigC3r/mgN116GBTzdyttogwy0MNeIcvAe/LdsDupnfA9kAg5M4VBNxvxHHpEuP1LSq9S4zjo7LGzxuX39uHPjoyWcyOTATcR8vRHB9v6KOYq1oToJ51DYA7DeL2h8Tt6gncixW3gy5y32PcbtWE3GOcgDvDO2D7+RPyUxgI+NkZDtgnnjjEu1DLUxNX1hSoBvxMKIekqrlQNckyf7FqwE/NI+BnHTqOodirbDXg54oS8tNgz2yv3HIAasBPXibk52UT8FPOHd50B0fNq2pGUmts4oRS+z3dAVP7WdUMp/Y93QFUu6SaEdU+U82Yai7VbFHVqF6a1F+hO6apv4CiKIqiKIqiKIqiKIqiKIqiKIqiKEoO/AM/kklRvwAtrgAAAABJRU5ErkJggg==",
    id: 10,
    link: "https://vayyar.com/",
  },
];

let index = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    document.body.innerHTML += `-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`;
    document.body.innerHTML += `<h3>company name: ${objectArray[index].companyNAme} city: ${objectArray[index].city} pictur: <img src=${objectArray[index].pictureId}> number id: ${objectArray[index].id} link: <a href=${objectArray[index].link}> click to website</a> `;
    index++;
  }
}
