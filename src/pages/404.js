import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const NotFoundPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Boo! This page doesn't exist </h1>
                <section className="content-body">
                <p> it's the 404 error for me </p>
		     <Link to="/">return home</Link> 
		
                </section>
            </article>
        </div>
    </Layout>
)

export default NotFoundPage
