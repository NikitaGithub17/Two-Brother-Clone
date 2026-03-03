
-- Products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  tagline TEXT,
  category TEXT NOT NULL,
  badge TEXT,
  price NUMERIC(10,2) NOT NULL,
  original_price NUMERIC(10,2),
  image_url TEXT,
  image_url_2 TEXT,
  rating NUMERIC(3,1) DEFAULT 4.9,
  review_count INTEGER DEFAULT 0,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Quantity options for each product (fetched dynamically)
CREATE TABLE public.quantity_options (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  sort_order INTEGER DEFAULT 0
);

-- Enable RLS (public read since this is a public store)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quantity_options ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are publicly readable" ON public.products FOR SELECT USING (true);
CREATE POLICY "Quantity options are publicly readable" ON public.quantity_options FOR SELECT USING (true);
