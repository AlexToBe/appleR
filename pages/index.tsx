import Head from "next/head";
import Header from "../components/Header";
import Landing from "@/components/Landing";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { GetServerSideProps } from "next";
import { fetchCategories } from "@/utils/fetchCategories";
import { fetchProducts } from "@/utils/fetchProduct";
import Product from "@/components/Product";
import Basket from "@/components/Basket";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";


    
interface Props{
    categories: Category[]
    products: Product[]
    session: Session | null;
}




export default function Home({ categories, products }: Props) {
    const showProducts = (category: number) => {
        if (!categories[category]) {
       }else{}
        if (categories[category]) {
            return products.filter((product) => product.category._ref === categories[category]._id)
           .map((product) =>  <Product  product = {product} key = {product._id}  /> )
        }
        
            return <div></div>
       
    }


  return (
    <div>
        <Head>
            <title>Apple Redesign</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheed" href="/build/tailwind.css" />
        </Head>
          <Header />
          <Basket/>
        <main className="relative h-[200vh] bg-[#E7ECEE] " >
            <Landing/>
        </main>
          <section className=" relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B] ">
            <div className=" space-y-10 py-16">
                  

                <h1 className=" text-center text-4xl font-medium  tracking-wide text-white md:text-5xl">
                    newPromos
                  </h1>
                <TabGroup>
                      <TabList className="flex justify-center ">
                          {categories.map((category) => (
                              <Tab
                                  key={category._id}
                                  id={category._id}
                                  className={({selected}) => 
                                      ` whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light
                                       outline-none md:py-4 md:px-6 md:text-base ${
                                      selected
                                          ? ' borderGradient bg-[#35383C] text-white'
                                          : 'border-b-2 border-[#35383C] text-[#747474]'
                                       }`
                                      
                                  }>
                                  {category.title}
                              </Tab>
                          ))}
                      </TabList>
                      <TabPanels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4" >
                          <TabPanel className='tabPanel' > {showProducts(0)} </TabPanel>
                          <TabPanel className='tabPanel' > {showProducts(1)} </TabPanel>
                          <TabPanel className='tabPanel' > {showProducts(2)} </TabPanel>
                          <TabPanel className='tabPanel' > {showProducts(3)} </TabPanel>
                          
                      </TabPanels>
                  </TabGroup>


            </div>
                  
        </section>
    </div>
  )
}


//backend code
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const categrories = await fetchCategories()
    const products = await fetchProducts()

    const session = await getSession(context)
    return {
        props: {
            categories: categrories,
            products: products,
            session: session
        }
    }
}


