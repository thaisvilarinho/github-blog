import { Profile } from './components/Profile'
import { BriefIssueCard } from './components/BriefIssueCard'
import { SearchForm } from './components/SearchForm'

import { HomeContainer, IssuePosts } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <header>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <SearchForm />
      </header>

      <IssuePosts>
        <BriefIssueCard
          title="JavaScript data types and data structures"
          postedAt="Há 1 dia"
          briefMessage="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn."
        />
        <BriefIssueCard
          title="JavaScript data types and data structures"
          postedAt="Há 1 dia"
          briefMessage="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn."
        />
        <BriefIssueCard
          title="JavaScript data types and data structures"
          postedAt="Há 1 dia"
          briefMessage="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn."
        />
        <BriefIssueCard
          title="JavaScript data types and data structures"
          postedAt="Há 1 dia"
          briefMessage="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn."
        />
        <BriefIssueCard
          title="JavaScript data types and data structures"
          postedAt="Há 1 dia"
          briefMessage="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn."
        />
        <BriefIssueCard
          title="JavaScript data types and data structures"
          postedAt="Há 1 dia"
          briefMessage="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn."
        />
      </IssuePosts>
    </HomeContainer>
  )
}
