# Wallabag

simple et efficase, interessant et beaucoup

- AnnotationBundle
    + `WallabagAnnotationTestCase` extends `WebTestCase`
        * setUp()
    + Controller
        * `AnnotationControllerTest` extends `WallabagAnnotationTestCase`
            - testGetAnnotations()
            - testSetAnnotation()
            - testAllowEmptyQuote()
            - testAllowOmmittedQuote()
            - testSetAnnotationWithQuoteTooLong()
            - testEditAnnotation()
            - testDeleteAnnotation()


- ApiBundle
    + `WallabagApiTestCase` extends `WebTestCase`
        * setUp()
    + Controller
        * `DeveloperControllerTest` extends `WallabagCoreTestCase`
            - testCreateClient()
            - testCreateToken()
            - testCreateTokenWithBadClientId()
            - testListingClient()
            - testDeveloperHowto()
            - testRemoveClient()
        * `EntryRestControllerTest` extends `WallabagApiTestCase`3
            - testGetOneEntry()
            - testGetOneEntryWithOriginUrl()
            - testExportEntry()
            - testGetOneEntryWrongUser()
            - testGetEntries()
            - testGetEntriesDetailMetadata()
            - testGetEntriesWithFullOptions()
            - testGetEntriesPublicOnly()
            - testGetEntriesOnPageTwo()
            - testGetStarredEntriesWithBadSort()
            - testGetStarredEntries()
            - testGetArchiveEntries()
            - testGetTaggedEntries()
            - testGetTaggedEntriesWithBadParams()
            - testGetDatedEntries()
            - testGetDatedSupEntries()
            - testDeleteEntry()
            - testDeleteEntryExpectId()
            - testDeleteEntryExpectBadRequest()
            - testPostEntry()
            - testPostSameEntry()
            - testPostEntryWhenFetchContentFails()
            - testPostArchivedAndStarredEntry()
            - testPostArchivedAndStarredEntryWithoutQuotes()
            - testPostEntryWithOriginUrl()
            - testPatchEntry()
            - testPatchEntryWithoutQuotes()
            - testPatchEntryWithOriginUrl()
            - testPatchEntryRemoveOriginUrl()
            - testPatchEntryNullOriginUrl()
            - testGetTagsEntry()
            - testPostTagsOnEntry()
            - testDeleteOneTagEntry()
            - testSaveIsArchivedAfterPost()
            - testSaveIsStarredAfterPost()
            - testGetEntriesExists()
            - testGetEntriesExistsWithManyUrls()
            - testGetEntriesExistsWithManyUrlsHashed()