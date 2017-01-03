# Parsing Safeway

http://api.safeway.com/api/circularsodata/v5/Offers()?$filter=Stores/any(s:s/StoreNumber%20eq%20%271508%27)&$expand=Categories
# 1508 is the store number?
JSON.parse(data.body)['value'] => array of json objects with keys:

["Categories", "EventId", "OfferId", "ItemType", "VersionId", "PageVariantId", "StoreEventId", "OfferType", "PositionNumber", "DefaultImage", "HeadLine", "BodyCopy", "SalePrice", "RegularPrice", "WasNowPrice", "UOM", "PriceCopy", "SaveAmount", "CallOutCopy", "LimitText", "LegalText", "StartDate", "EndDate", "ProductCode", "BarCode"] 

# Parsing QFC
 ad = HTTParty.get("https://wklyads.qfc.com/flyers/qfc-weekly/grid_view/148159?chrome=broadsheet&store_code=00849&type=2")

 # or https://wklyads.qfc.com/flyers/qfc-weekly/grid_view/chrome=broadsheet&store_code=00849&type=2?locale=en-US&type=1

noko = Nokogiri::HTML(ad.body)
sc = noko.css('script')[6]
t = sc.text
# Split on semicolons outside of quotes
semi = t.split(/(;)(?=(?:[^"]|"[^"]*")*$)/)
# Remove new line characters
semi[38].gsub!("\n", "")
# Remove object name in order to parse as JSON
semi[38].gsub!("        window['flyerData'] = ", "")
# Parse into a hash
JSON.parse(semi[38])

parsed.keys
 => ["id", "categories", "legibility_heights", "correction_notices_count", "flyer_locale", "flyer_run_id", "height", "name_identifier", "path", "image_hosts", "pdf_url", "primary_stack", "resolutions", "tags", "timezone", "theme", "title", "valid_from", "valid_to", "width", "items", "spotlights", "category_spotlights", "flyer_type_id", "flyer_type_name", "height_mode_modifier", "pages", "preview_only_text", "display_validity_dates", "display_discount_slider", "grocery_list", "ltc_integration_type", "search", "search_url", "store_locator_url", "url", "custom_discount_slider_name", "custom_all_sales_name", "custom_see_it", "custom_find_in_store_text", "category_highlights_enabled", "coupon_highlights_enabled", "subscribe_enabled", "subscribe_pop_type", "subscribe_pop_url", "subscribe_pop_height", "subscribe_pop_width", "merchant", "deep_share_url", "merchant_id", "merchant_logo", "multi_flyer_shopping_list", "large_merchant_logo", "spotlight_highlights", "grid_view", "large_thumbnail_image_url", "thumbnail_image_url", "is_ciab", "facing_starts_at", "tears"]

# Find the flyer items and list of keys per item
parsed["items"][0].keys
 => ["flyer_item_id", "flyer_id", "flyer_type_id", "merchant_id", "brand", "display_name", "name", "description", "current_price", "pre_price_text", "price_text", "category_ids", "left", "bottom", "right", "top", "run_item_id", "discount_percent", "display_type", "iframe_display_width", "iframe_display_height", "url", "in_store_only", "review", "video", "page_destination", "video_count", "video_url", "recipe", "recipe_title", "text_areas", "shopping_cart_urls", "large_image_url", "x_large_image_url", "dist_coupon_image_url", "sku", "custom1", "custom2", "custom3", "custom4", "custom5", "custom6", "valid_to", "valid_from", "disclaimer_text", "flyer_type_name_identifier", "flyer_run_id", "sale_story"]

 "flyer_item_id", "flyer_id", "flyer_type_id", "merchant_id", "brand", "display_name", "name", "description", "current_price", "pre_price_text", "price_text", "category_ids", "left", "bottom", "right", "top", "run_item_id", "discount_percent", "display_type", "iframe_display_width", "iframe_display_height", "url", "in_store_only", "review", "video", "page_destination", "video_count", "video_url", "recipe", "recipe_title", "text_areas", "shopping_cart_urls", "large_image_url", "x_large_image_url", "dist_coupon_image_url", "sku", "custom1", "custom2", "custom3", "custom4", "custom5", "custom6", "valid_to", "valid_from", "disclaimer_text", "flyer_type_name_identifier", "flyer_run_id", "sale_story"


 {
       "Categories":[
         {
           "CategoryNameType":"Meat & SeafoodContent Categories","CategoryName":"Meat & Seafood","CategoryType":"Content Categories"
         }
       ],"EventId":"3012302","OfferId":"3863611","ItemType":null,"VersionId":"3012302","PageVariantId":"3038071","StoreEventId":"143F749033012302","OfferType":null,"PositionNumber":null,"DefaultImage":"C_3038071_1_dc34bdc24f4b","HeadLine":"Pork St. Louis Style Spareribs","BodyCopy":"Previously Frozen","SalePrice":"$2.99 LB. With Card","RegularPrice":null,"WasNowPrice":null,"UOM":null,"PriceCopy":"$2.99 LB. With Card","SaveAmount":null,"CallOutCopy":null,"LimitText":null,"LegalText":null,"StartDate":"2016-12-26T00:00:00","EndDate":"2017-01-27T23:59:59","ProductCode":null,"BarCode":null
     },{
       "Categories":[
         {
           "CategoryNameType":"Meat & SeafoodContent Categories","CategoryName":"Meat & Seafood","CategoryType":"Content Categories"
         }
       ],"EventId":"3012302","OfferId":"3863612","ItemType":null,"VersionId":"3012302","PageVariantId":"3038071","StoreEventId":"143F749033012302","OfferType":null,"PositionNumber":null,"DefaultImage":"C_3038071_2_d9d07ce0787b","HeadLine":"Safeway SELECT Extra Meaty Pork Loin Back Ribs","BodyCopy":"Bone-In Previously Frozen","SalePrice":"$3.99 LB. With Card","RegularPrice":null,"WasNowPrice":null,"UOM":null,"PriceCopy":"$3.99 LB. With Card","SaveAmount":null,"CallOutCopy":null,"LimitText":null,"LegalText":null,"StartDate":"2016-12-26T00:00:00","EndDate":"2017-01-27T23:59:59","ProductCode":null,"BarCode":null
     }

     http://ct.safeway.com/api/circularimages/v5/images/C_3038926_14_8444941d5001/300/jpg
     DefaultImage: "C... "
