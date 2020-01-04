import React from 'react';
import News from './News';

const ListNews = ({Listnews}) => {

    const ListnewsFiltered = Listnews.filter(news=>news.description!==null||news.urlToImage!==null);

    return (

        <div className="row">
            {ListnewsFiltered.map(news =>(  
              <News
                key={news.url}
                news={news}
              />
            ))}
        </div>
        
    );
}

export default ListNews;